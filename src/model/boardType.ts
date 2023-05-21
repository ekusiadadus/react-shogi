import { type PieceType, type PieceState } from "./pieceType"

export interface BoardType {
  board: Array<Array<PieceState | null>>
  upKomadai: Record<PieceType, number>
  downKomadai: Record<PieceType, number>
  turn: "up" | "down"
  selected?: { x: number; y: number } | null
  winner?: "up" | "down" | null
}
