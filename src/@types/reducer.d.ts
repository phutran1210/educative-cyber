import { rootReducer } from "../redux/rootReducer.js"

declare global {
  type AppState = ReturnType<typeof rootReducer>
}