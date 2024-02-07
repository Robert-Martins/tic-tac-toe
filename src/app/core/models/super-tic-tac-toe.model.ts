import { GameType } from "../enums/game-type.enum";
import { PlayerType } from "../enums/player-type.enum";
import { GameMode } from "./game-mode.model";
import { TicTacToe } from "./tic-tac-toe.model";

export class SuperTicTacToe extends GameMode<TicTacToe> {

    public override getType(): GameType {
        return GameType.SUPER_TIC_TAC_TOE;
    }

    protected override checkDiagonal(diagonal: number[], currentPlayer: PlayerType): boolean {
        return diagonal
            ?.map((index: number) => this.plays[index])
            ?.every((board: TicTacToe) => board.isWinner(currentPlayer));
    }

    protected override get initialArray(): TicTacToe[] {
        return new Array(9).fill(GameMode.start(GameType.TIC_TAC_TOE));
    }

    protected override isItemCompleted(item: TicTacToe[], currentPlayer: PlayerType): boolean {
        return item?.every(i => i.isWinner(currentPlayer));
    }

}