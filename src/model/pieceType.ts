// TypeScriptのEnumを使用して駒の種類を定義します
export enum PieceType {
  Gyoku = "Gyoku",
  Hisha = "Hisha",
  Kaku = "Kaku",
  Kin = "Kin",
  Gin = "Gin",
  Kei = "Kei",
  Kyo = "Kyo",
  Fu = "Fu",
  Ou = "Ou",
  Ryu = "Ryu",
  Uma = "Uma",
  Narigin = "Narigin",
  Narikei = "Narikei",
  Narikyo = "Narikyo",
  To = "To"
}

// 駒の種類に対応する表示を表すオブジェクト
export const PieceDisplay = {
  [PieceType.Gyoku]: "玉",
  [PieceType.Hisha]: "飛",
  [PieceType.Kaku]: "角",
  [PieceType.Kin]: "金",
  [PieceType.Gin]: "銀",
  [PieceType.Kei]: "桂",
  [PieceType.Kyo]: "香",
  [PieceType.Fu]: "歩",
  [PieceType.Ou]: "王",
  [PieceType.Ryu]: "龍",
  [PieceType.Uma]: "馬",
  [PieceType.Narigin]: "成銀",
  [PieceType.Narikei]: "成桂",
  [PieceType.Narikyo]: "成香",
  [PieceType.To]: "と"
}
