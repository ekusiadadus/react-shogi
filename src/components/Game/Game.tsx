import { useState } from "react"
import Board from "../Board/Board"
import { parseKIF } from "../../helpers/kifParser"

export const Game = ({ KIF }: { KIF: string }) => {
  const [stepNumber, setStepNumber] = useState(0)

  const kifData = parseKIF(KIF)
  console.log("🚀 ~ file: Game.tsx:10 ~ Game ~ length:", length)
  console.log("🚀 ~ file: Game.tsx:10 ~ Game ~ kifData:", kifData)

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
    <div
      className="game"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px"
      }}
    >
      <Board board={kifData[stepNumber]} />
      <div className="game-info">
        <button onTouchStart={prevStep}>前へ戻る</button>
        <button onTouchStart={nextStep}>次へ進む</button>
      </div>
    </div>
  )
}

export default Game
