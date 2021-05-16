import {ThunkType} from "./store";
import {PackAPI} from "../dal/API";

// export enum PacksEnum  {
//     SET_PACKS = 'SET_PACKS'
// }
//
//
// // ACTION CREATORS
// export const setPacks = (listOfDecks: initialStateType) => ({type: PacksEnum.SET_PACKS, listOfDecks} as const)
//
//
// // THUNK CREATORS
// export const setPacksTC = (): ThunkType => (dispatch) => {
//     PackAPI.getPacks()
//         .then((res) => {
//             console.log(res)
//             debugger
//         })
// }
//
// export type ActionType = SetPacksActionType
// type SetPacksActionType = ReturnType<typeof setPacks>