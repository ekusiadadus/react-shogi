declare module "react-shogi" {
  // 修正: 空のオブジェクト型ではなく具体的な型を使用する
  interface ShogiGameProps {
    prop1: string
    prop2: number
  }

  // 修正: 空のオブジェクト型ではなく具体的な型を使用する
  export class ShogiGame extends React.Component<ShogiGameProps, unknown> {}
}
