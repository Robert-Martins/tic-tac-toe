import { GameType } from "../enums/game-type.enum";
import { PlayerType } from "../enums/player-type.enum";

export abstract class GameMode {

    protected winner?: PlayerType;

    protected readonly FIRST_INDEX: number = 0;

    protected readonly LAST_INDEX: number = 8;

    protected readonly ELEMENTS_IN_LINE: number = 3;

    public abstract getType(): GameType;

    public getWinner(): PlayerType {
        return this.winner;
    }

    public isWinner(currentPlayer: PlayerType): boolean {
        if(this.winner)
            return true;
        const bool: boolean = this.checkLines(currentPlayer) || this.checkColumns(currentPlayer) || this.checkDiagonals(currentPlayer);
        if(bool)
            this.winner = currentPlayer;
        return bool;
    }

    protected abstract checkLines(currentPlayer: PlayerType): boolean;

    protected abstract checkColumns(currentPlayer: PlayerType): boolean;

    protected checkDiagonals(currentPlayer: PlayerType): boolean {
        return this.diagonalsArrays
            ?.map(
                (array: number[]) => this.checkDiagonal(array, currentPlayer)
            ).reduce(
                (a: boolean, b: boolean) => a === b
            );
    }

    protected abstract checkDiagonal(diagonal: number[], currentPlayer: PlayerType): boolean;

    protected get diagonalsArrays(): number[][] {
        return [[0, 4, 8],[2, 4, 6]];
    }

}