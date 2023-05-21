import type { BoardType } from "../../model/boardType"
import { Komadai } from "../Komadai/Komadai"
import { Square } from "../Square/Square"

const Board = ({ board }: { board: BoardType }) => {
  const rowLabels = ["一", "二", "三", "四", "五", "六", "七", "八", "九"]
  const columnLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].reverse()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Komadai pieces={board.upKomadai} turn="up" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ width: "40px" }}></div>
          {columnLabels.map((label, j) => (
            <div
              key={j}
              style={{
                width: "40px",
                textAlign: "center",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {label}
            </div>
          ))}
          <div style={{ width: "40px" }}></div>
        </div>
        {board.board.map((row, i) => (
          <div key={i} style={{ display: "flex" }}>
            <div style={{ width: "40px" }}></div>
            {row.map((piece, j) => (
              <Square key={j} position={{ row: i, column: j }} piece={piece} />
            ))}

            <div
              style={{
                width: "40px",
                textAlign: "center",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {rowLabels[i]}
            </div>
          </div>
        ))}
        <div style={{ display: "flex" }}>
          <div style={{ width: "40px" }}></div>
          {columnLabels.map((_, j) => (
            <div
              key={j}
              style={{
                width: "40px",
                textAlign: "center",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            ></div>
          ))}
          <div style={{ width: "40px" }}></div>
        </div>
      </div>
      <Komadai pieces={board.downKomadai} turn="down" />
    </div>
  )
}

export default Board
