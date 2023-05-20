import { useState } from "react"
import Board from "../Board/Board"
import { PieceType } from "../../model/pieceType"

// KIF形式の棋譜データ。このサンプルでは単純化のために配列で表現しています。

const initialBoard = [
  [
    { type: PieceType.Kyo, direction: "down" },
    { type: PieceType.Kei, direction: "down" },
    { type: PieceType.Gin, direction: "down" },
    { type: PieceType.Kin, direction: "down" },
    { type: PieceType.Ou, direction: "down" },
    { type: PieceType.Kin, direction: "down" },
    { type: PieceType.Gin, direction: "down" },
    { type: PieceType.Kei, direction: "down" },
    { type: PieceType.Kyo, direction: "down" }
  ],
  [
    null,
    { type: PieceType.Hisha, direction: "down" },
    null,
    null,
    null,
    null,
    null,
    { type: PieceType.Kaku, direction: "down" },
    null
  ],
  [
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" }
  ],
  Array(9).fill(null),
  Array(9).fill(null),
  Array(9).fill(null),
  [
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" }
  ],
  [
    null,
    { type: PieceType.Hisha, direction: "up" },
    null,
    null,
    null,
    null,
    null,
    { type: PieceType.Kaku, direction: "up" },
    null
  ],
  [
    { type: PieceType.Kyo, direction: "up" },
    { type: PieceType.Kei, direction: "up" },
    { type: PieceType.Gin, direction: "up" },
    { type: PieceType.Kin, direction: "up" },
    { type: PieceType.Gyoku, direction: "up" },
    { type: PieceType.Kin, direction: "up" },
    { type: PieceType.Gin, direction: "up" },
    { type: PieceType.Kei, direction: "up" },
    { type: PieceType.Kyo, direction: "up" }
  ]
]

export const kifData = [initialBoard]

export const Game = () => {
  const [stepNumber, setStepNumber] = useState(0)

  function nextStep() {
    if (stepNumber < kifData.length - 1) {
      setStepNumber(stepNumber + 1)
    }
  }

  function prevStep() {
    if (stepNumber > 0) {
      setStepNumber(stepNumber - 1)
    }
  }

  return (
    <div className="game">
      <Board board={kifData[stepNumber]} />
      <div className="game-info">
        <button onClick={prevStep}>前へ戻る</button>
        <button onClick={nextStep}>次へ進む</button>
      </div>
    </div>
  )
}

export default Game
