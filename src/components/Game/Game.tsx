import { useState, useEffect, useMemo } from "react"
import Board from "../Board/Board"
import { parseKIF } from "../../helpers/kifParser"

export const Game = ({ KIF }: { KIF: string }) => {
  const [stepNumber, setStepNumber] = useState(0)
  const [data, setData] = useState(KIF)
  const kifData = useMemo(() => parseKIF(data), [data])

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Scrolling down
        nextStep()
      } else if (event.deltaY < 0) {
        // Scrolling up
        prevStep()
      }
    }

    window.addEventListener("wheel", handleWheel)
    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [stepNumber, kifData])

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

  const [reverseBoardStyleString, setReverseBoardStyleString] =
    useState<string>("")
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
      <div
        style={{
          transform: reverseBoardStyleString
        }}
      >
        <Board board={kifData[stepNumber]} />
      </div>
      <div className="game-info">
        <button onClick={prevStep}>前へ戻る</button>
        <button onClick={nextStep}>次へ進む</button>
        {/* 現状のboardを表示するボタン */}
        <button
          onClick={() => {
            alert(JSON.stringify(kifData[stepNumber]))
          }}
        >
          現状のboardを表示する
        </button>
        {/* 反転する */}
        <button
          onClick={() => {
            setReverseBoardStyleString(
              reverseBoardStyleString === "rotate(180deg)"
                ? ""
                : "rotate(180deg)"
            )
          }}
        >
          反転する
        </button>
        {/* KIF形式の入力formとボタン */}
        <form
          onSubmit={e => {
            e.preventDefault()
            const inputValue = (
              document.getElementById("kif") as HTMLInputElement
            ).value
            setData(inputValue)
            setStepNumber(0)
          }}
        >
          <textarea
            name="kif"
            id="kif"
            cols={30}
            rows={10}
            defaultValue={data}
          ></textarea>
          <button type="submit">KIFを入力する</button>
        </form>
      </div>
    </div>
  )
}

export default Game
