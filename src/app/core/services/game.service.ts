import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { User } from '../models/user.model';
import { GameMode } from '../models/game-mode.model';
import { GameType } from '../enums/game-type.enum';
import { GameModePlays } from '../types/types';
import { PlayerType } from '../enums/player-type.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private user$: BehaviorSubject<User> = new BehaviorSubject(null);

  private readonly USER_STORAGE_KEY: string = "user";

  constructor() { 
    this.init();
  }

  public create(gameType: GameType): Observable<GameMode<GameModePlays>> {
    return new Observable<GameMode<GameModePlays>>(
      (subscriber: Subscriber<GameMode<GameModePlays>>) => {
        const newGame: GameMode<GameModePlays> = GameMode.start(gameType);
        this.addUserGame(newGame);
        subscriber.next(newGame);
      }
    );
  }

  public findAll(): Observable<GameMode<GameModePlays>[]> {
    return new Observable(
      (subscriber: Subscriber<GameMode<GameModePlays>[]>) => subscriber.next(this.getGames())
    );
  }

  public findById(id: string): Observable<GameMode<GameModePlays>> {
    return new Observable<GameMode<GameModePlays>>(
      (subscriber: Subscriber<GameMode<GameModePlays>>) => {
        const games: GameMode<GameModePlays>[] = this.getGames();
        const found: GameMode<GameModePlays> = games?.find(game => game?.id === id);
        subscriber.next(found);
      }
    );
  }

  public isGameWinner(currentPlayer: PlayerType, game: GameMode<GameModePlays>): Observable<boolean> {
    return new Observable<boolean>(
      (subscriber: Subscriber<boolean>) => {
        const bool: boolean = game?.isWinner(currentPlayer);
        bool && this.handleFinishedGame(game);
        subscriber.next(bool);
      }
    );
  }

  public delete(id: string): Observable<void> {
    return new Observable<void>(
      (subscriber: Subscriber<void>) => {
        const games: GameMode<GameModePlays>[] = this.getGames();
        const found: GameMode<GameModePlays>[] = games?.filter(game => game?.id !== id);
        this.updateUserGames(found);
        subscriber.next();
      }
    );
  }

  public clear(): Observable<void> {
    return new Observable(
      (subscriber: Subscriber<void>) => {
        localStorage.removeItem(this.USER_STORAGE_KEY);
        this.saveUser(new User());
        subscriber.next();
      }
    );
  }

  private init(): void {
    this.findUser().subscribe({
      error: this.handleNewUser
    });
  }

  private get user(): User {
    return this.user$.value;
  }

  private getGames(): GameMode<GameModePlays>[] {
    return this.user?.games ?? [];
  }

  private handleFinishedGame(game: GameMode<GameModePlays>): void {
    const games: GameMode<GameModePlays>[] = this.getGames();
    const found: GameMode<GameModePlays>[] = games?.filter(g => g?.id !== game?.id);
    found?.push(game);
    this.updateUserGames(found);
  }

  private addUserGame(game: GameMode<GameModePlays>): void {
    const games: GameMode<GameModePlays>[] = this.getGames();
    games.push(game);
    this.updateUserGames(games);
  }

  private updateUserGames(games: GameMode<GameModePlays>[]): void {
    const user: User = this.user;
    user.games = games;
    this.saveUser(user);
  }

  private saveUser(user: User): void {
    this.user$.next(user);
    localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));
  }

  private handleNewUser(subscriber: Subscriber<void>): void {
    this.saveUser(new User());
    subscriber.error();
  }

  private handleUser(user: User, subscriber: Subscriber<void>): void {
    this.user$.next(user);
    subscriber.next();
  }

  private findUser(): Observable<void> {
    return new Observable<void>(
      (subscriber: Subscriber<void>) => {
        const user: User = JSON.parse(localStorage.getItem(this.USER_STORAGE_KEY));
        user ? this.handleUser(user, subscriber) : this.handleNewUser(subscriber);
      }
    );
  }

}
