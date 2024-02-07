import { GameType } from "../enums/game-type.enum";
import { PlayerType } from "../enums/player-type.enum";
import { GameMode } from "./game-mode.model";

export class TicTacToe extends GameMode<PlayerType> {

    public override getType(): GameType {
        return GameType.TIC_TAC_TOE;
    }

    protected override checkLines(currentPlayer: PlayerType): boolean {
        const plays: PlayerType[] = this.plays;
        for(let i: number = this.FIRST_INDEX; i <= this.LAST_INDEX; i + this.ELEMENTS_IN_LINE) {
            if(this.isItemCompleted(plays?.slice(i, i + this.ELEMENTS_IN_LINE - 1), currentPlayer)) 
                return true;
        }
        return false;
    }

    protected override checkDiagonal(diagonal: number[], currentPlayer: PlayerType): boolean {
        return diagonal
            ?.map((index: number) => this.plays[index])
            ?.every((player: PlayerType) => player === currentPlayer);
    }

    protected override get initialArray(): PlayerType[] {
        return new Array(9).fill(PlayerType.NO);
    }

    protected override isItemCompleted(item: PlayerType[], currentPlayer: PlayerType): boolean {
        return item?.every(i => i === currentPlayer);
    }

}