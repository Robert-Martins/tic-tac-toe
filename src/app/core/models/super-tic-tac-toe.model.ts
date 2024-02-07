import { GameType } from "../enums/game-type.enum";
import { PlayerType } from "../enums/player-type.enum";
import { GameMode } from "./game-mode.model";
import { TicTacToe } from "./tic-tac-toe.model";

export class SuperTicTacToe extends GameMode {

    public boards: TicTacToe[] = [];

    private constructor(boards: TicTacToe[] = []) {
        super();
        this.boards = boards;
    }

    public static new(): GameMode {
        return new SuperTicTacToe(this.initialBoardsArray) as GameMode;
    }

    public override getType(): GameType {
        return GameType.SUPER_TIC_TAC_TOE;
    }

    protected checkLines(currentPlayer: PlayerType): boolean {
        const boards: TicTacToe[] = this.boards;
        for(let i: number = this.FIRST_INDEX; i <= this.LAST_INDEX; i + this.ELEMENTS_IN_LINE) {
            if(this.isItemCompleted(boards?.slice(i, i + this.ELEMENTS_IN_LINE - 1), currentPlayer)) 
                return true;
        }
        return false;
    }

    protected checkColumns(currentPlayer: PlayerType): boolean {
        const boards: TicTacToe[] = this.boards;
        for(let i: number = this.FIRST_INDEX; i < this.ELEMENTS_IN_LINE; i++) {
            if(
                boards[i]?.isWinner(currentPlayer)
            ) 
                return true;
        }
        return false;
    }

    protected checkDiagonal(diagonal: number[], currentPlayer: PlayerType): boolean {
        return diagonal
            ?.map((index: number) => this.boards[index])
            ?.every((board: TicTacToe) => board.isWinner(currentPlayer));
    }

    private isItemCompleted(item: TicTacToe[], currentPlayer: PlayerType): boolean {
        return item?.every(i => i.isWinner(currentPlayer));
    }

    private static get initialBoardsArray(): TicTacToe[] {
        return new Array(9).fill(TicTacToe.new());
    }

}