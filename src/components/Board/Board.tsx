import type { PieceType } from "../../model/pieceType"
import { Square } from "../Square/Square"

const Board = ({
  board
}: {
  board: Array<
    Array<{
      type: PieceType
      direction: "up" | "down"
    }>
  >
}) => {
  const rowLabels = ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
  const columnLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].reverse()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div style={{ display: "flex" }}>
        {columnLabels.map((label, j) => (
          <div key={j} style={{ width: "32px", textAlign: "center" }}>
            {label}
          </div>
        ))}
        <div style={{ width: "32px" }}></div>
      </div>
      {board.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((piece, j) => (
            <Square key={j} position={{ row: i, column: j }} piece={piece} />
          ))}
          <div style={{ width: "32px", textAlign: "center" }}>
            {rowLabels[i]}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Board
