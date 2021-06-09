import {RootStoreType} from "./store";
import {CardsPacksType, CardsResponseType, PackAPI, PutCardsPackType} from "../dal/API";
import {AuthActionsTypes, errorAC, loadingSpinner} from "./auth-actions";
import {ThunkDispatch} from "redux-thunk";

const initialState:CardsResponseType = {
    cardPacks: [],
    cardPacksTotalCount: 1474,
    maxCardsCount: 103,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    token: "09aadab0-b1ae-11eb-9596-21f90af40386",
    tokenDeathTime: 1621269460955
}


export const packsReducer = (state: CardsResponseType = initialState, action: ActionType): CardsResponseType => {
    switch (action.type) {
        case PacksEnum.SET_PACKS:
            return {...state, cardPacks: action.payload}
        case PacksEnum.ADD_PACK:
            return {...state, cardPacks: [...state.cardPacks , action.payload]}
        case PacksEnum.CHANGE_CURRENT_PAGE:
            return {...state, page: action.currentPage}
        case PacksEnum.DELETE_PACK:
            return {...state, cardPacks: state.cardPacks.filter((card) => (card._id !== action.id))}
        default:
            return state
    }
}

export enum PacksEnum {
    SET_PACKS = 'PACKS/SET_PACKS',
    ADD_PACK = 'PACKS/ADD_PACK',
    CHANGE_CURRENT_PAGE = 'PACKS/CHANGE_CURRENT_PAGE',
    DELETE_PACK = 'PACKS/DELETE_PACK'
}


// ACTION CREATORS
export const setPacksAC = (payload: CardsPacksType[]) => ({type: PacksEnum.SET_PACKS, payload} as const)
export const addPackAC = (payload: CardsPacksType) => ({type: PacksEnum.ADD_PACK, payload} as const)
export const changeCurrentPageAC = (currentPage: number) => ({
    type: PacksEnum.CHANGE_CURRENT_PAGE,
    currentPage
} as const)
export const deletePackAC = (id: string) => ({type: PacksEnum.DELETE_PACK, id} as const)


// THUNK CREATORS
export const setPacksTC = (pageNumber?: number) => (dispatch: ThunkDispatch<RootStoreType, unknown, ActionType | AuthActionsTypes>, getState: () => RootStoreType) => {
    dispatch(loadingSpinner(true))
    const pageCount = getState().decks.pageCount
    const page = getState().decks.page
    PackAPI.getPacks(page, pageCount)
        .then((res) => {
            dispatch(setPacksAC(res.data.cardPacks))
            dispatch(changeCurrentPageAC(page))
        })
        .catch((e) => {
            const error = e.response.data.error
            dispatch(errorAC(error))
            alert(error)
        })
        .finally(() => {
            dispatch(loadingSpinner(false))
        })
}
export const addCardsPackTC = () => (dispatch: ThunkDispatch<RootStoreType, unknown, ActionType | AuthActionsTypes> ) => {
    dispatch(loadingSpinner(true))
    PackAPI.postPack({name: "GOGO", private: false})
        .then((res) => {
            dispatch(addPackAC(res.data.newCardsPack))
            dispatch(setPacksTC())
        })
        .finally(() => {
            dispatch(loadingSpinner(false))
        })
}
export const deleteCardsPackTC = (id: string) => (dispatch: ThunkDispatch<RootStoreType, unknown, ActionType | AuthActionsTypes>) => {
    dispatch(loadingSpinner(true))
    PackAPI.deletePack(id)
        .then((res) => {
            dispatch(deletePackAC(id)) // res.data.newCardsPack._id, вчера так работала
        })
        .catch((e) => {
            const error = e.message
            // const error = e.response.data.error   было раньше вот так написанно, и работало
            dispatch(deletePackAC(error))
            alert(error)
        })
        .finally(() => {
            dispatch(loadingSpinner(false))
        })
}
export const updateCardsPackTC = (cardsPack: PutCardsPackType) => (dispatch:ThunkDispatch<RootStoreType, unknown, ActionType | AuthActionsTypes>) => {
    dispatch(loadingSpinner(true))
    PackAPI.updatePack(cardsPack)
        .then((res) => {
            dispatch(setPacksTC())
        })
        .finally(() => {
            dispatch(loadingSpinner(false))
        })
}


export type ActionType = SetPacksActionType | AddPacksActionType | ChangeCurrentPage | DeletePackActionType
type SetPacksActionType = ReturnType<typeof setPacksAC>
type AddPacksActionType = ReturnType<typeof addPackAC>
type ChangeCurrentPage = ReturnType<typeof changeCurrentPageAC>
type DeletePackActionType = ReturnType<typeof deletePackAC>
