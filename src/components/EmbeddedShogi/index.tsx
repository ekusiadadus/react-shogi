import { EmbeddedShogi } from "./EmbeddedShogi"
import ReactDOM from "react-dom/client"

// eslint-disable-next-line
// @ts-ignore
globalThis.run = () => {
  if (document.getElementById("test-bot")) {
    return
  }
  const root = document.createElement("div")
  root.id = "test-bot"

  document.body.appendChild(root)
  ReactDOM.createRoot(root as HTMLElement).render(
    <div>
      <EmbeddedShogi />
    </div>
  )
}
