import type { PieceType, PieceStateWithCount } from "../../model/pieceType"
import { PieceDisplay } from "../../model/pieceType"

export const Komadai = ({
  pieces,
  turn
}: {
  pieces: Record<PieceType, number>
  turn: "up" | "down"
}) => {
  const defaultPieceCount = 9 // Define the total number of slots in the grid

  // Prepare a list of pieces to display
  const displayPieces = Object.entries(pieces).reduce<
    Array<PieceStateWithCount | null>
  >((list, [type, count]) => {
    if (count > 0) {
      return [
        ...list,
        {
          type: type as PieceType, // Ensure the correct PieceType is assigned
          direction: "up" as const,
          count
        }
      ]
    } else {
      return list
    }
  }, [])

  // Add null pieces to fill the empty spaces
  while (displayPieces.length < defaultPieceCount) {
    displayPieces.push(null)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 40px)",
        gridTemplateRows: "repeat(3, 40px)", // Added to enforce a 3x3 grid
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        boxSizing: "border-box"
      }}
    >
      {displayPieces.map((piece, index) => (
        <button
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "40px",
            height: "40px",
            border: "1px solid black",
            backgroundColor: "beige",
            transform:
              turn === "up" ? "rotate(180deg) scaleX(-1)" : "rotate(0deg)",
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
          {piece && piece.count > 1 ? (
            <span
              style={{
                position: "absolute",
                bottom: 2,
                right: 2,
                fontSize: "smaller",
                backgroundColor: "white",
                padding: "0 2px"
              }}
            >
              {piece.count}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  )
}
