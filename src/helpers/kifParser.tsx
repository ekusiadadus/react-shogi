import { type BoardType } from "../model/boardType"
import { PieceDisplay, type PieceState, PieceType } from "../model/pieceType"

const initialBoard: BoardType = {
  board: [
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
      { type: PieceType.Kaku, direction: "up" },
      null,
      null,
      null,
      null,
      null,
      { type: PieceType.Hisha, direction: "up" },
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
  ],
  upKomadai: {
    [PieceType.Fu]: 0,
    [PieceType.Kyo]: 0,
    [PieceType.Kei]: 0,
    [PieceType.Gin]: 0,
    [PieceType.Kin]: 0,
    [PieceType.Kaku]: 0,
    [PieceType.Hisha]: 0,
    [PieceType.Gyoku]: 0,
    [PieceType.Ou]: 0,
    [PieceType.To]: 0,
    [PieceType.Narikyo]: 0,
    [PieceType.Narikei]: 0,
    [PieceType.Narigin]: 0,
    [PieceType.Uma]: 0,
    [PieceType.Ryu]: 0
  },
  downKomadai: {
    [PieceType.Fu]: 0,
    [PieceType.Kyo]: 0,
    [PieceType.Kei]: 0,
    [PieceType.Gin]: 0,
    [PieceType.Kin]: 0,
    [PieceType.Kaku]: 0,
    [PieceType.Hisha]: 0,
    [PieceType.Gyoku]: 0,
    [PieceType.Ou]: 0,
    [PieceType.To]: 0,
    [PieceType.Narikyo]: 0,
    [PieceType.Narikei]: 0,
    [PieceType.Narigin]: 0,
    [PieceType.Uma]: 0,
    [PieceType.Ryu]: 0
  },
  turn: "up",
  selected: null,
  winner: null
}

export const num2num = (str: string) => {
  // 全角数字を半角数字に
  let reg
  const twoBtNum = ["１", "２", "３", "４", "５", "６", "７", "８", "９", "０"]
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  for (let i = 0; i < num.length; i++) {
    reg = new RegExp(twoBtNum[i], "g") // ex) reg = /３/g
    str = str.replace(reg, num[i])
  }
  return str
}
export const kanji2num = (str: string) => {
  // 漢数字を半角数字に
  let reg
  const kanjiNum = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "〇"]
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  for (let i = 0; i < num.length; i++) {
    reg = new RegExp(kanjiNum[i], "g") // ex) reg = /三/g
    str = str.replace(reg, num[i])
  }
  return str
}

// KIF形式から盤面の座標を得るための関数
export const parseKIFLine = (kifLine: string) => {
  kifLine = num2num(kifLine)
  kifLine = kanji2num(kifLine)

  const matches = kifLine.match(/(\d+) (\d{2})(\D+)\((\d{2})\)/)

  if (matches === null) {
    throw new Error("Invalid KIF format")
  }

  // eslint-disable-next-line
  const matchesNotNull = matches!

  // 元の位置
  const fromY = parseInt(matches[4].charAt(1), 10) - 1
  const fromX = 9 - parseInt(matches[4].charAt(0), 10)

  // 移動先の位置
  const toY = parseInt(matches[2].charAt(1), 10) - 1
  const toX = 9 - parseInt(matches[2].charAt(0), 10)

  // 駒の種類を取得
  const pieceType = Object.keys(PieceDisplay).find(
    key => PieceDisplay[key as keyof typeof PieceDisplay] === matchesNotNull[3]
  )

  if (!pieceType) {
    throw new Error("Invalid piece type")
  }

  const index = parseInt(matches[1], 10) // 手番をインデックスとして使用します
  const direction: "up" | "down" = index % 2 === 1 ? "up" : "down" // 修正: 1始まりのインデックスを考慮

  return { fromX, fromY, toX, toY, pieceType, direction }
}

// KIF形式から盤面の座標を得るための関数
// ボードと駒台を更新する関数
export const updateBoardAndKomadai = ({
  board,
  kifLine
}: {
  board: BoardType
  kifLine: string
}): BoardType => {
  // KIF形式から移動情報をパース
  const move = parseKIFLine(kifLine)

  // 移動前のピースの位置
  const piece: PieceState | null = board.board[move.fromY][move.fromX]
  const newBoard: Array<Array<PieceState | null>> = board.board.map(row => [
    ...row
  ])
  const newUpKomadai: Record<PieceType, number> = { ...board.upKomadai }
  const newDownKomadai: Record<PieceType, number> = { ...board.downKomadai }

  if (piece === null || piece.type !== move.pieceType) {
    // If piece is not on the board, it must be on the komadai.
    const komadaiKey: "upKomadai" | "downKomadai" =
      move.direction === "up" ? "downKomadai" : "upKomadai"

    if (board[komadaiKey][move.pieceType as PieceType] === 0) {
      throw new Error("Invalid piece movement")
    }

    // Remove the piece from komadai.
    board[komadaiKey][move.pieceType as PieceType]--
  } else {
    // ピースの移動方向を更新
    piece.direction = move.direction

    // ピースを移動
    newBoard[move.fromY][move.fromX] = null

    // If there is a piece on the destination square, it is captured.
    const capturedPiece = board.board[move.toY][move.toX]
    if (capturedPiece !== null) {
      const komadaiKey = move.direction === "up" ? "upKomadai" : "downKomadai"
      board[komadaiKey][capturedPiece.type]++
    }
  }

  newBoard[move.toY][move.toX] = piece

  return {
    board: newBoard,
    upKomadai: newUpKomadai,
    downKomadai: newDownKomadai,
    turn: move.direction === "up" ? "down" : "up", // Switch turn
    selected: null,
    winner: null
  }
}

export const parseKIF = (KIF: string) => {
  const boardHistory: BoardType[] = [initialBoard]
  const lines = KIF.split(/\r?\n/)

  lines.forEach(line => {
    boardHistory.push(
      updateBoardAndKomadai({
        board: boardHistory[boardHistory.length - 1],
        kifLine: line
      })
    )
  })

  return boardHistory
}
