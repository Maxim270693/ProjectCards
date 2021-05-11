import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {authReducer} from './authReducer'
import {AuthActionsTypes} from './auth-actions';
import {decksReducer} from "./decks-reducer";
import {cardsReducer} from "./cards-reducer";

const rootReducer = combineReducers({
  user: authReducer,
  decks: decksReducer,
  cards: cardsReducer
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers((applyMiddleware(thunkMiddleware))))

export type RootStoreType =ReturnType<typeof rootReducer>
// типизация санки
export type ThunkType = ThunkAction<void, RootStoreType, unknown, AuthActionsTypes>



// radux-devtuls
// react-developerTuls

