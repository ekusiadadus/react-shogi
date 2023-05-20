import type { PieceType } from "../../model/pieceType"
import Piece from "../Piece/Piece"

export const Square = ({
  piece,
  position
}: {
  piece: {
    type: PieceType
    direction: "up" | "down"
  }
  position: {
    row: number
    column: number
  }
}) => {
  return (
    <div className="square">
      {piece === null && (
        <Piece type={null} direction="up" position={position} />
      )}
      {piece !== null && (
        <Piece
          type={piece.type}
          direction={piece.direction}
          position={position}
        />
      )}
    </div>
  )
}

export default Square
