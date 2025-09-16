

import { Game } from "./types";

const gameBuilder = new Game.Builder()

const player1Name = "Aswartha"
const player1Char =  '{ defaultInput: "X" }'

gameBuilder.addPlayer1(player1Name, player1Char)

const player2Name = "Umar"
const player2Char = '{ defaultInput: "O" }'

gameBuilder.addPlayer2(player2Name, player2Char)

const game = gameBuilder.build()

while (game.state == "STARTED") {
    console.log(game.nextTurnPrompt())
    const box ="Enter Box:"
    game.play(box)
}
