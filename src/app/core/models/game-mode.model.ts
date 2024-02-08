import { GameType } from "../enums/game-type.enum";
import { PlayerType } from "../enums/player-type.enum";
import { GameModePlays } from "../types/types";
import { SuperTicTacToe } from "./super-tic-tac-toe.model";
import { TicTacToe } from "./tic-tac-toe.model";

export abstract class GameMode<T> {

    public id: string;

    public plays: T[] = [];

    public winner?: PlayerType;

    public finished?: boolean;

    public finishedAt?: Date;

    public createdAt?: Date;

    protected readonly FIRST_INDEX: number = 0;

    protected readonly LAST_INDEX: number = 8;

    protected readonly ELEMENTS_IN_LINE: number = 3;

    private start(): GameMode<T> {
        this.plays = this.initialArray;
        this.createdAt = new Date();
        return this;
    }

    public abstract getType(): GameType;

    public static start(gameType: GameType): GameMode<GameModePlays> {
        switch(gameType) {
            case GameType.TIC_TAC_TOE:
                return new TicTacToe().start();
            case GameType.SUPER_TIC_TAC_TOE:
                return new SuperTicTacToe().start();
        }
    }

    public getWinner(): PlayerType {
        return this.winner;
    }

    public isWinner(currentPlayer: PlayerType): boolean {
        if(this.finished)
            return true;
        const bool: boolean = this.checkLines(currentPlayer) || this.checkColumns(currentPlayer) || this.checkDiagonals(currentPlayer);
        if(bool)
            this.finish(currentPlayer);
        return bool;
    }

    public get isFinished(): boolean {
        return this.finished;
    }

    protected finish(currentPlayer: PlayerType): void {
        this.winner = currentPlayer;
        this.finished = true;
        this.finishedAt = new Date();
    }

    protected checkLines(currentPlayer: PlayerType): boolean {
        const plays: T[] = this.plays;
        for(let i: number = this.FIRST_INDEX; i <= this.LAST_INDEX; i + this.ELEMENTS_IN_LINE) {
            if(this.isItemCompleted(plays?.slice(i, i + this.ELEMENTS_IN_LINE - 1), currentPlayer)) 
                return true;
        }
        return false;
    }

    protected checkColumns(currentPlayer: PlayerType): boolean {
        const plays: T[] = this.plays;
        for(let i: number = this.FIRST_INDEX; i < this.ELEMENTS_IN_LINE; i++) {
            if(
                this.isItemCompleted(
                    plays?.filter((play: T, index: number) => this.getColumnArray(i).includes(index)), 
                    currentPlayer
                )
            ) 
                return true;
        }
        return false;
    }

    private checkDiagonals(currentPlayer: PlayerType): boolean {
        return this.diagonalsArrays
            ?.map(
                (array: number[]) => this.checkDiagonal(array, currentPlayer)
            ).reduce(
                (a: boolean, b: boolean) => a === b
            );
    }

    private getColumnArray(initialIndex: number): number[] {
        const columnArray: number[] = [];
        for (let i = 0; i < this.ELEMENTS_IN_LINE; i++)
            columnArray.push(initialIndex + i * this.ELEMENTS_IN_LINE);
        return columnArray;
    }

    private get diagonalsArrays(): number[][] {
        return [[0, 4, 8],[2, 4, 6]];
    }

    protected abstract checkDiagonal(diagonal: number[], currentPlayer: PlayerType): boolean;

    protected abstract isItemCompleted(item: T[], currentPlayer: PlayerType): boolean;

    protected abstract get initialArray(): T[];

}