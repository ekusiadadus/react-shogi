import { PieceDisplay, type PieceType } from "../../model/pieceType"

export const Piece = ({
  type,
  direction
}: {
  type: PieceType
  direction: "up" | "down"
}) => {
  const transform = direction === "up" ? "rotate(0deg)" : "rotate(180deg)"

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
        border: "1px solid black",
        backgroundColor: "beige",
        transform,
        color: "black"
      }}
    >
      {PieceDisplay[type]}
    </div>
  )
}

export default Piece
