import type { PieceState } from "../../model/pieceType"
import { PieceDisplay } from "../../model/pieceType"

export const Komadai = ({
  pieces
}: {
  pieces: Array<{
    pieceState: PieceState
  }>
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px"
      }}
    >
      {pieces.map((piece, index) => (
        <button
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
            height: "32px",
            border: "1px solid black",
            backgroundColor: "beige",
            transform:
              piece.pieceState.direction === "up"
                ? "rotate(0deg)"
                : "rotate(180deg)",
            color: "black",
            padding: 0,
            outline: "none",
            borderRadius: 0,
            boxShadow: "none"
          }}
          onClick={() => {
            alert(
              `type: ${PieceDisplay[piece.pieceState.type]}, direction: ${
                piece.pieceState.direction
              }`
            )
          }}
        >
          {piece.pieceState.type === null
            ? ""
            : PieceDisplay[piece.pieceState.type]}
        </button>
      ))}
    </div>
  )
}
