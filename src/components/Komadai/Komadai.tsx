import type { PieceType, PieceState } from "../../model/pieceType"
import { PieceDisplay } from "../../model/pieceType"

export const Komadai = ({ pieces }: { pieces: Record<PieceType, number> }) => {
  const defaultPieceCount = 9 // Assume that there are 9 spaces in komadai

  // Prepare a list of pieces to display
  const displayPieces = Object.entries(pieces).reduce<Array<PieceState | null>>(
    (list, [type, count]) => {
      return [
        ...list,
        ...new Array(count).fill({ type, direction: "up" as const })
      ]
    },
    []
  )

  // Add null pieces to fill the empty spaces
  while (displayPieces.length < defaultPieceCount) {
    displayPieces.push(null)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 32px)",
        gridGap: "8px",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {displayPieces.map((piece, index) => (
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
              piece && piece.direction === "up"
                ? "rotate(0deg)"
                : "rotate(180deg)",
            color: "black",
            padding: 0,
            outline: "none",
            borderRadius: 0,
            boxShadow: "none"
          }}
          onClick={() => {
            if (piece) {
              alert(
                `type: ${PieceDisplay[piece.type]}, direction: ${
                  piece.direction
                }`
              )
            }
          }}
          disabled={piece === null}
        >
          {piece === null ? "" : PieceDisplay[piece.type]}
        </button>
      ))}
    </div>
  )
}
