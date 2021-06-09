import axios from "axios"
import {CardsStateType} from "../bll/cards-reducer";

const instanceLocal = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    //baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
})

export type AuthObjType = {
    email: string
    password: string
    rememberMe?: boolean
}
type UpdateMeObjType = {
    name: string
    avatar: string
}
export type NewPasswordObjType = {
    password: string
    resetPasswordToken: string
}

export type AuthMeResponseType = {
    _id: string
    email: string
    name: string
    avatar?: string

    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean

    error?: string;
}

type AuthResponseType = {
    info: string,
    error?: string
}

export type CardsPacksType = {
    cardsCount: number
    created: string
    deckCover?: null
    grade: number
    more_id: string
    name: string
    path: string
    private: false
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}

export type CardsResponseType = {
    cardPacks: CardsPacksType[],
    cardPacksTotalCount: number,
    maxCardsCount: number,
    minCardsCount: number,
    page: number,
    pageCount: number,
    token: string,
    tokenDeathTime: number
}

export type CardPackType = {
    name: string
    deckCover?: string
    private: boolean
}

type NewCardsPackType = {
    newCardsPack: CardsPacksType
    token: string
    tokenDeathTime: number
}

export type PutCardsPackType = {
    _id: string
    name?: string
}

export type CardsType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    __v: number
    _id: string
}

export type NewCardType = {
    cardsPack_id: string
    question: string
    answer: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}

export type UpdateCardType = {
    _id: string
    question?: string
    answer?: string
}

export type UpdateResponseType = {
    answer: string
    answerImg: string
    answerVideo: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    more_id: string
    question: string
    questionImg: string
    questionVideo: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}


export const authAPI = {
    ping() {
        return instanceLocal.get(`ping?frontTime=${Date.now()}`)
    },
    login(loginObj: AuthObjType) {
        return instanceLocal.post<AuthMeResponseType>('auth/login', loginObj).then(res => res.data)
    },
    logOut() {
        return instanceLocal.delete<AuthResponseType>(`auth/me`)
    },
    signUp(singUpObj: AuthObjType) {
        return instanceLocal.post<{ error?: string, addedUser: any }>('auth/register', singUpObj)
    },
    me() {
        return instanceLocal.post<AuthMeResponseType>('auth/me')
    },
    updateMe(updateMeObj: UpdateMeObjType) {
        return instanceLocal.put<{ updatedUser: AuthMeResponseType, error?: string }>('auth/me', updateMeObj)
    },
    recovery(email: string) {
        return instanceLocal.put<AuthResponseType>('auth/forgot', {
            email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px"
	                <a href='https://maksimushka.github.io/cards/#/set-new-password/$token$'>link</a>
	            </div>`
        }).then(res => res.data)
    },
    setNewPassword(newPasswordObj: NewPasswordObjType) {
        return instanceLocal.post<AuthResponseType>('auth/set-new-password', newPasswordObj).then(res => res.data)
    }
}
export const PackAPI = {
    getPacks(page: number, pageCount: number) {
        return instanceLocal.get<CardsResponseType>(`/cards/pack?page=${page}&pageCount=${pageCount}`)
    },
    postPack(cardsPack: CardPackType) {
        return instanceLocal.post<NewCardsPackType>("/cards/pack", {cardsPack})
    },
    deletePack(id: string) {
        return instanceLocal.delete<NewCardsPackType>(`/cards/pack?id=${id}`)
    },
    updatePack(cardsPack: PutCardsPackType) {
        return instanceLocal.put("/cards/pack", {cardsPack})
    }
}
export const cardAPI = {
    getCards(cardsPack_id: string) {
        return instanceLocal.get<CardsStateType>(`/cards/card?cardsPack_id=${cardsPack_id}`)
    },
    postCard(card: NewCardType) {
        return instanceLocal.post<{ newCard: CardsType }>("/cards/card", {card})
    },
    deleteCard(id: string) {
        return instanceLocal.delete(`/cards/card?id=${id}`)  // <{ deleteCardsPack: CardsType }>
    },
    updateCard(card: UpdateCardType) {
        return instanceLocal.put<UpdateResponseType>("/cards/card", {card})
    }
}
