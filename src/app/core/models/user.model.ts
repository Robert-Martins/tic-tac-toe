import { GameType } from "../enums/game-type.enum";
import { PlayerType } from "../enums/player-type.enum";
import { GameModePlays } from "../types/types";
import { GameMode } from "./game-mode.model";

export class User {

    public games: GameMode<GameModePlays>[] = [];

    constructor(
        games: GameMode<GameModePlays>[] = []
    ) {
        this.games = games;
    }

    public getMatchesPlayed(): number {
        return this.games?.length;
    }

    public getMatchesWonByPlayerType(playerType: PlayerType): number {
        return this.games?.filter(game => game.isWinner(playerType))?.length;
    }

    public getMatchesPlayedByType(gameType: GameType): number {
        return this.games?.filter(game => game.getType() === gameType).length;
    }

}