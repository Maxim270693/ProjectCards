import React, {useEffect} from "react";
import './packs.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../main/bll/store";
import {
    addCardsPackTC,
    changeCurrentPageAC,
    deleteCardsPackTC,
    setPacksTC,
    updateCardsPackTC
} from "../../main/bll/packs-reducer";
import {Redirect} from "react-router-dom";
import {PATH} from "../../main/ui/routes/Routes";
import {CardsPacksType, CardsResponseType} from "../../main/dal/API";
import Spinner from "../../components/spinner/Spinner";

export const Packs = () => {
    const dispatch = useDispatch()
    // const {} = useSelector<RootStoreType,CardsResponseType>((state) => state.decks)
    const isAuth = useSelector<RootStoreType, boolean>((state) => state.user.isAuth)
    const cardPacks = useSelector<RootStoreType, CardsPacksType[]>((state) => state.decks.cardPacks)
    const page = useSelector<RootStoreType, number>((state) => state.decks.page)
    const pageCount = useSelector<RootStoreType, number>((state) => state.decks.pageCount)
    const cardPacksTotalCount = useSelector<RootStoreType, number>((state) => state.decks.cardPacksTotalCount)
    const isLoading = useSelector<RootStoreType, boolean>((state) => state.user.isLoading)


    useEffect(() => {
        dispatch(setPacksTC(page))
    }, [page])

    const addPack = () => {
        dispatch(addCardsPackTC())
    }

    const pagesCount = Math.ceil(cardPacksTotalCount / pageCount)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <>
            {isLoading
                ? <div className='wrapper'><Spinner/></div>
                : <div className='wrapper_packs'>
                    {pages.map((p, index) => <span key={index}
                                                   className={page === p ? "page" : ''}
                                                   onClick={() => {
                                                       dispatch(changeCurrentPageAC(p))
                                                   }}
                    >{p + ' '}</span>)}
                    <h4>Packs page</h4>
                    <input type="checkbox"/>
                    <span>my packs</span>
                    <h4>Card packs</h4>
                    <table id="simple-board">
                        <tbody>
                        <tr id="row0">
                            <td id="cell0-0">name</td>
                            <td id="cell0-1">cards count</td>
                            <td id="cell0-2">updated</td>
                            <td id="cell0-2">url</td>
                            <td id="cell0-2">
                                <button onClick={() => {
                                    addPack()
                                }}>add
                                </button>
                            </td>
                        </tr>
                        {
                            cardPacks.map((card) => <tr key={card._id} >
                                <td >{card.name}</td>
                                <td >{card.cardsCount}</td>
                                <td >{card.updated}</td>
                                <td ></td>
                                <td >
                                    <button onClick={() => {
                                        dispatch(deleteCardsPackTC(card._id))
                                    }}>delete
                                    </button>
                                    <button onClick={() => {
                                        dispatch(updateCardsPackTC({_id: card._id, name: "Vasya"}))
                                    }}>update
                                    </button>
                                    <a href={''}>cards</a>
                                </td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}