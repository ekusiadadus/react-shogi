import { type BoardType } from "../model/boardType"
import { PieceDisplay, PieceType } from "../model/pieceType"

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
export const zenkaku2hankaku = (str: string) => {
  // 全角を半角に
  const zenkaku = ["　"]
  const hankaku = [" "]
  for (let i = 0; i < zenkaku.length; i++) {
    const reg = new RegExp(zenkaku[i], "g")
    str = str.replace(reg, hankaku[i])
  }
  return str
}
export const multipleKuhaku2single = (str: string) => {
  // 連続する空白を一つに
  const reg = / +/g
  str = str.replace(reg, " ")
  return str
}

export const promotePiece = (pieceType: PieceType): PieceType => {
  switch (pieceType) {
    case PieceType.Fu:
      return PieceType.To
    case PieceType.Kyo:
      return PieceType.Narikyo
    case PieceType.Kei:
      return PieceType.Narikei
    case PieceType.Gin:
      return PieceType.Narigin
    case PieceType.Hisha:
      return PieceType.Ryu
    case PieceType.Kaku:
      return PieceType.Uma
    default:
      return pieceType
  }
}

// KIF形式から盤面の座標を得るための関数
// ボードと駒台を更新する関数
// ボードと駒台を更新する関数
export const updateBoardAndKomadai = ({
  board,
  move
}: {
  board: BoardType
  move: {
    fromX: number | null
    fromY: number | null
    toX: number
    toY: number
    pieceType: PieceType
    upKomadai: Record<PieceType, number>
    downKomadai: Record<PieceType, number>
    direction: "up" | "down"
    promote: boolean
  }
}): BoardType => {
  const newBoard = board.board.map(row => row.map(piece => piece))

  // Check if there's a piece in the destination
  const capturedPiece = newBoard[move.toY][move.toX]

  // Place the new piece
  newBoard[move.toY][move.toX] = {
    type: move.pieceType,
    direction: move.direction
  }

  // Remove the old piece from the original location if it exists
  if (move.fromX !== null && move.fromY !== null) {
    newBoard[move.fromY][move.fromX] = null
  }

  if (move.promote) {
    move.pieceType = promotePiece(move.pieceType)
  }

  const newUpKomadai = { ...board.upKomadai }
  const newDownKomadai = { ...board.downKomadai }
  // If the move was a piece drop
  if (move.fromX === null && move.fromY === null) {
    if (move.direction === "up") {
      newUpKomadai[move.pieceType] -= 1
    } else {
      newDownKomadai[move.pieceType] -= 1
    }
  } else if (capturedPiece !== null) {
    // If the move captured a piece
    if (move.direction === "up") {
      newDownKomadai[capturedPiece.type] += 1 // Captured pieces get added to the opponent's Komadai
    } else {
      newUpKomadai[capturedPiece.type] += 1
    }
  }

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
  let prevMove: { toX: number; toY: number } | null = null

  lines.forEach((line, index) => {
    line = num2num(line)
    line = kanji2num(line)
    line = zenkaku2hankaku(line)
    line = multipleKuhaku2single(line)

    const matches = line.match(
      // eslint-disable-next-line
      /^((\d+) (同 |同　|同|\d{2})(玉|飛|龍|竜|角|馬|金|銀|成銀|全|桂|成桂|圭|香|成香|杏|歩|と)(打|成)?(\((\d{2})\))?)|(中断|投了|持将棋|千日手|切れ負け|反則勝ち|反則負け|入玉勝ち|不戦勝|不戦敗|詰み|不詰)$/
    )

    if (matches === null) {
      throw new Error("Invalid KIF format")
    }

    const idx = parseInt(matches[1], 10)
    const direction: "up" | "down" = idx % 2 === 1 ? "up" : "down"
    const pieceType = Object.keys(PieceDisplay).find(
      key => PieceDisplay[key as keyof typeof PieceDisplay] === matches[4]
    ) as PieceType

    let toX: number, toY: number
    if (matches[3] === "同" || matches[3] === "同　" || matches[3] === "同 ") {
      if (!prevMove) {
        throw new Error("Invalid KIF format")
      }
      toX = prevMove.toX
      toY = prevMove.toY
    } else if (matches[5] === "打") {
      toY = parseInt(matches[3].charAt(1), 10) - 1
      toX = 9 - parseInt(matches[3].charAt(0), 10)
    } else {
      toY = parseInt(matches[3].charAt(1), 10) - 1
      toX = 9 - parseInt(matches[3].charAt(0), 10)
    }

    let promote: boolean = false
    if (matches[5] === "成") {
      promote = true
    }

    let fromX: number | null, fromY: number | null

    if (matches[5] === "打") {
      fromX = null
      fromY = null
    } else if (matches[5] === "成") {
      if (!matches[7]) {
        throw new Error("Invalid KIF format")
      }
      fromY = parseInt(matches[7].charAt(1), 10) - 1
      fromX = 9 - parseInt(matches[7].charAt(0), 10)
    } else if (
      matches[3] === "同" ||
      matches[3] === "同　" ||
      matches[3] === "同 "
    ) {
      if (!prevMove) {
        throw new Error("Invalid KIF format")
      }
      fromY = parseInt(matches[7].charAt(1), 10) - 1
      fromX = 9 - parseInt(matches[7].charAt(0), 10)
    } else {
      if (!matches[3]) {
        throw new Error("Invalid KIF format")
      }
      fromY = parseInt(matches[7].charAt(1), 10) - 1
      fromX = 9 - parseInt(matches[7].charAt(0), 10)
    }

    const move = {
      direction,
      pieceType,
      fromX,
      fromY,
      toX,
      toY,
      upKomadai: { ...boardHistory[boardHistory.length - 1].upKomadai },
      downKomadai: { ...boardHistory[boardHistory.length - 1].downKomadai },
      promote
    }

    prevMove = { toX, toY }

    boardHistory.push(
      updateBoardAndKomadai({
        board: boardHistory[boardHistory.length - 1],
        move
      })
    )
  })

  return boardHistory
}
