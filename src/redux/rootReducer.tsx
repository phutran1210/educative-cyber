import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import spinnerReducer from '../components/Spinner/modules/reducer'

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))

export const rootReducer = combineReducers({
  spinnerReducer
})

export const store = createStore(rootReducer, enhancer)
