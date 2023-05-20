import { PieceDisplay, type PieceType } from "../../model/pieceType"

export const Piece = ({
  type,
  direction,
  position
}: {
  type: PieceType
  direction: "up" | "down"
  position: {
    row: number
    column: number
  }
}) => {
  const transform = direction === "up" ? "rotate(0deg)" : "rotate(180deg)"

  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "32px",
        height: "32px",
        border: "1px solid black",
        backgroundColor: "beige",
        transform,
        color: "black",
        padding: 0,
        outline: "none",
        borderRadius: 0,
        boxShadow: "none"
      }}
      //onclick show position and piece info in alert
      onClick={() => {
        alert(`row: ${position.row}, column: ${position.column}, type: ${type}`)
      }}
    >
      {PieceDisplay[type]}
    </button>
  )
}

export default Piece
