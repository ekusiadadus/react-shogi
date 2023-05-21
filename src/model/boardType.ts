import { type PieceState } from "./pieceType"

export interface BoardType {
  board: Array<Array<PieceState | null>>
  upKomadai: Array<PieceState | null>
  downKomadai: Array<PieceState | null>
  turn: "up" | "down"
  selected?: { x: number; y: number }
  winner?: "up" | "down"
}
