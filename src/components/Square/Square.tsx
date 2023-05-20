import React from "react";
import { PieceType } from "../../model/pieceType";
import Piece from "../Piece/Piece";

export const Square = ({
  piece,
}: {
  piece: {
    type: PieceType;
    direction: "up" | "down";
  };
}) => {
  return (
    <div className="square">
      {piece && <Piece type={piece.type} direction={piece.direction} />}
      {!piece && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            height: "30px",
            border: "1px solid black",
            backgroundColor: "beige",
            color: "black",
          }}
        ></div>
      )}
    </div>
  );
};

export default Square;
