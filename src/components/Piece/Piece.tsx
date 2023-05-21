import { PieceDisplay, type PieceType } from "../../model/pieceType"

export const Piece = ({
  type,
  direction,
  position
}: {
  type: PieceType | null
  direction: "up" | "down"
  position: {
    row: number
    column: number
  }
}) => {
  const transform = direction === "up" ? "rotate(0deg)" : "rotate(180deg)"
  const displayType = type === null ? "" : PieceDisplay[type]

  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        border: "1px solid black",
        backgroundColor: "beige",
        transform,
        color: "black",
        padding: 0,
        outline: "none",
        borderRadius: 0,
        boxShadow: "none"
      }}
      onClick={() => {
        alert(
          `row: ${position.row}, column: ${position.column}, type: ${displayType}`
        )
      }}
    >
      {type === null ? "" : PieceDisplay[type]}
    </button>
  )
}

export default Piece
