import {cardAPI, CardsType, NewCardType, UpdateCardType} from "../dal/API";
import {ThunkDispatch} from "redux-thunk";
import {AuthActionsTypes, errorAC, loadingSpinner} from "./auth-actions";
import {RootStoreType} from "./store";

const initialState = {
    cards: [] as Array<CardsType>,
    cardsTotalCount: 0,
    maxGrade: 6,
    minGrade: 0,
    packUserId: "5eecf82a3ed8f700042f1186",
    page: 1,
    pageCount: 4,
    token: "00f93d00-b6fc-11eb-b407-87c78a0d4b57",
    tokenDeathTime: 1621258702928,
}

export type CardsStateType = typeof initialState

export const cardsReducer = (state: CardsStateType = initialState, action: CardsActionsType): CardsStateType => {
    switch (action.type) {
        case CardsEnum.SET_CARDS:
            return {...state, cards: action.payload}
        case CardsEnum.POST_CARD:
            return {...state, cards: [action.newCard,...state.cards]}
        case CardsEnum.DELETE_CARD:
            return {...state, cards: state.cards.filter((card) => card._id !== action.deleteCardsPack)}
        case CardsEnum.UPDATE_CARD:
        // return {...state,cards: action._id}  // вопрос по case update ?
        default:
            return state
    }
}

export enum CardsEnum {
    SET_CARDS = 'CARDS/SET_CARDS',
    POST_CARD = 'CARDS/POST_CARD',
    DELETE_CARD = 'CARDS/DELETE_CARD',
    UPDATE_CARD = 'CARDS/UPDATE_CARD'
}

// Action Creators

export const getCardsAC = (payload: Array<CardsType>) => ({type: CardsEnum.SET_CARDS, payload} as const)
export const postCardAC = (newCard: CardsType) => ({type: CardsEnum.POST_CARD, newCard} as const)
export const deleteCardAC = (deleteCardsPack: string) => ({type: CardsEnum.DELETE_CARD, deleteCardsPack} as const)
export const updateCardAC = (_id: string) => ({type: CardsEnum.UPDATE_CARD, _id} as const)

// Thunk Creators

export const getCardsTC = (packUserId: string) => (dispatch: ThunkDispatch<CardsStateType, unknown, CardsActionsType | AuthActionsTypes>) => {
    dispatch(loadingSpinner(true))
    cardAPI.getCards(packUserId)
        .then((res) => {
            dispatch(getCardsAC(res.data.cards))
        })
        .catch((e) => {
            dispatch(errorAC(e.response.data.error))
        })
        .finally(() => {
            dispatch(loadingSpinner(false))
        })
}
export const postCardTC = (card: NewCardType) => (dispatch: ThunkDispatch<CardsStateType, unknown, CardsActionsType | AuthActionsTypes>, getState: () => RootStoreType) => {
    // dispatch(loadingSpinner(true))
    const packUserId = getState().cards.packUserId
    cardAPI.postCard(card)
        .then((res) => {
            dispatch(postCardAC(res.data.newCard))
            //dispatch(getCardsTC(packUserId))
        })
        .catch((e) => {
            dispatch(errorAC(e.response.data.error))
        })
        .finally(() => {
            // dispatch(loadingSpinner(false))
        })
}
export const deleteCardTC = (id: string) => (dispatch: ThunkDispatch<CardsStateType, unknown, CardsActionsType | AuthActionsTypes>, getState: () => RootStoreType) => {
    // const packUserId = getState().cards.packUserId
    dispatch(loadingSpinner(true))
    cardAPI.deleteCard(id)
        .then((res) => {
            dispatch(deleteCardAC(id)) // .deleteCardsPack.user_id
            //dispatch(getCardsTC(packUserId))  // начали ошибки выпадать
        })
        .catch((e) => {
            const error = e.message
            dispatch(errorAC(error))
            alert(error)
        })
        .finally(() => {
            dispatch(loadingSpinner(false))
        })
}


export const updateCardTC = (card: UpdateCardType) => (dispatch: ThunkDispatch<CardsStateType, unknown, CardsActionsType | AuthActionsTypes>, getState: () => RootStoreType) => {
    dispatch(loadingSpinner(true))
    const packUserId = getState().cards.packUserId
    cardAPI.updateCard(card)
        .then((res) => {
            dispatch(updateCardAC(res.data._id))
                //dispatch(getCardsTC(packUserId)) // не перерысовывается
        })
        .catch((e) => {
            const error = e.message
            dispatch(errorAC(error))
            alert(error)
        })
        .finally(() => {
            dispatch(loadingSpinner(false))
        })
}

type CardsActionsType = GetCardsActionType | PostCardActionType | DeleteCardActionType | UpdateCardActionType
export type GetCardsActionType = ReturnType<typeof getCardsAC>
export type PostCardActionType = ReturnType<typeof postCardAC>
export type DeleteCardActionType = ReturnType<typeof deleteCardAC>
export type UpdateCardActionType = ReturnType<typeof updateCardAC>
