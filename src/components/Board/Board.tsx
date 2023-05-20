import { PieceType } from "../../model/pieceType";
import { Square } from "../Square/Square";

const Board = ({
  board,
}: {
  board: {
    type: PieceType;
    direction: "up" | "down";
  }[][];
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {board.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((piece, j) => (
            <Square key={j} piece={piece} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
