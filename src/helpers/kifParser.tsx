import { PieceDisplay, PieceType } from "../model/pieceType"
import { index } from "../pages/BoardPage/index"

const initialBoard = [
  [
    { type: PieceType.Kyo, direction: "down" },
    { type: PieceType.Kei, direction: "down" },
    { type: PieceType.Gin, direction: "down" },
    { type: PieceType.Kin, direction: "down" },
    { type: PieceType.Ou, direction: "down" },
    { type: PieceType.Kin, direction: "down" },
    { type: PieceType.Gin, direction: "down" },
    { type: PieceType.Kei, direction: "down" },
    { type: PieceType.Kyo, direction: "down" }
  ],
  [
    null,
    { type: PieceType.Hisha, direction: "down" },
    null,
    null,
    null,
    null,
    null,
    { type: PieceType.Kaku, direction: "down" },
    null
  ],
  [
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" },
    { type: PieceType.Fu, direction: "down" }
  ],
  Array(9).fill(null),
  Array(9).fill(null),
  Array(9).fill(null),
  [
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" },
    { type: PieceType.Fu, direction: "up" }
  ],
  [
    null,
    { type: PieceType.Hisha, direction: "up" },
    null,
    null,
    null,
    null,
    null,
    { type: PieceType.Kaku, direction: "up" },
    null
  ],
  [
    { type: PieceType.Kyo, direction: "up" },
    { type: PieceType.Kei, direction: "up" },
    { type: PieceType.Gin, direction: "up" },
    { type: PieceType.Kin, direction: "up" },
    { type: PieceType.Gyoku, direction: "up" },
    { type: PieceType.Kin, direction: "up" },
    { type: PieceType.Gin, direction: "up" },
    { type: PieceType.Kei, direction: "up" },
    { type: PieceType.Kyo, direction: "up" }
  ]
]

export const num2num = (str: string) => {
  // 全角数字を半角数字に
  var reg
  var twoBtNum = ["１", "２", "３", "４", "５", "６", "７", "８", "９", "０"]
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  for (var i = 0; i < num.length; i++) {
    reg = new RegExp(twoBtNum[i], "g") // ex) reg = /３/g
    str = str.replace(reg, num[i])
  }
  return str
}
export const kanji2num = (str: string) => {
  // 漢数字を半角数字に
  var reg
  var kanjiNum = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "〇"]
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  for (var i = 0; i < num.length; i++) {
    reg = new RegExp(kanjiNum[i], "g") // ex) reg = /三/g
    str = str.replace(reg, num[i])
  }
  return str
}

// KIF形式から盤面の座標を得るための関数
export const parseKIFLine = (kifLine: string) => {
  kifLine = num2num(kifLine)
  kifLine = kanji2num(kifLine)

  let matches = kifLine.match(/(\d+) (\d{2})(\D+)\((\d{2})\)/)

  if (matches === null) {
    throw new Error("Invalid KIF format")
  }

  // 元の位置
  let fromY = parseInt(matches[4].charAt(1), 10) - 1
  let fromX = 9 - parseInt(matches[4].charAt(0), 10)

  console.log(fromX, fromY)

  // 移動先の位置
  let toY = parseInt(matches[2].charAt(1), 10) - 1
  let toX = 9 - parseInt(matches[2].charAt(0), 10)

  // 駒の種類を取得
  let pieceType = Object.keys(PieceDisplay).find(
    key => PieceDisplay[key] === matches[3]
  )

  if (!pieceType) {
    throw new Error("Invalid piece type")
  }

  let index = parseInt(matches[1], 10) // 手番をインデックスとして使用します
  let direction: "up" | "down" = index % 2 === 1 ? "up" : "down" // 修正: 1始まりのインデックスを考慮

  return { fromX, fromY, toX, toY, pieceType, direction }
}

// ボードを更新する関数
export const updateBoard = ({
  board,
  kifLine
}: {
  board: Array<{ type: PieceType; direction: "up" | "down" } | null>[]
  kifLine: string
}) => {
  // KIF形式から移動情報をパース
  let move = parseKIFLine(kifLine)

  // 移動前のピースの位置
  let piece = board[move.fromY][move.fromX]
  console.log(piece)

  if (piece === null || piece.type !== move.pieceType) {
    throw new Error("Invalid piece movement")
  }

  // ピースの移動方向を更新
  piece.direction = move.direction

  // ピースの移動方向を更新
  piece.direction = move.direction

  let newBoard = board.map(row => [...row])

  // ピースを移動
  newBoard[move.fromY][move.fromX] = null
  newBoard[move.toY][move.toX] = piece

  return newBoard
}

export const parseKIF = (KIF: string) => {
  let boardHistory = [initialBoard]
  let lines = KIF.split(/\r?\n/)

  lines.forEach((line, index) => {
    boardHistory.push(
      updateBoard({
        board: boardHistory[boardHistory.length - 1],
        kifLine: line
      })
    )
  })

  console.log(boardHistory)

  return boardHistory
}
