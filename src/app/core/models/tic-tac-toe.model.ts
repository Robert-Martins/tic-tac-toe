import { GameType } from "../enums/game-type.enum";
import { PlayerType } from "../enums/player-type.enum";
import { GameMode } from "./game-mode.model";

export class TicTacToe extends GameMode {

    private plays: PlayerType[] = [];

    private constructor(plays: PlayerType[] = []) {
        super();
        this.plays = plays;
    }

    public static new(): GameMode {
        return new TicTacToe(this.initialPlaysArray) as GameMode;
    }

    public override getType(): GameType {
        return GameType.TIC_TAC_TOE;
    }

    protected checkLines(currentPlayer: PlayerType): boolean {
        const plays: PlayerType[] = this.plays;
        for(let i: number = this.FIRST_INDEX; i <= this.LAST_INDEX; i + this.ELEMENTS_IN_LINE) {
            if(this.isItemCompleted(plays?.slice(i, i + this.ELEMENTS_IN_LINE - 1), currentPlayer)) 
                return true;
        }
        return false;
    }

    protected checkColumns(currentPlayer: PlayerType): boolean {
        const plays: PlayerType[] = this.plays;
        for(let i: number = this.FIRST_INDEX; i < this.ELEMENTS_IN_LINE; i++) {
            if(
                this.isItemCompleted(
                    plays?.filter((play: PlayerType, index: number) => this.getColumnArray(i).includes(index)), 
                    currentPlayer
                )
            ) 
                return true;
        }
        return false;
    }

    protected checkDiagonal(diagonal: number[], currentPlayer: PlayerType): boolean {
        return diagonal
            ?.map((index: number) => this.plays[index])
            ?.every((player: PlayerType) => player === currentPlayer);
    }

    private isItemCompleted(item: PlayerType[], currentPlayer: PlayerType): boolean {
        return item?.every(i => i === currentPlayer);
    }

    private getColumnArray(initialIndex: number): number[] {
        const columnArray: number[] = [];
        for (let i = 0; i < this.ELEMENTS_IN_LINE; i++)
            columnArray.push(initialIndex + i * this.ELEMENTS_IN_LINE);
        return columnArray;
    }

    private static get initialPlaysArray(): PlayerType[] {
        return new Array(9).fill(PlayerType.NO);
    }

}