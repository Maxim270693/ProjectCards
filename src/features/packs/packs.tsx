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
import {NavLink, Redirect} from "react-router-dom";
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

    const pages = []
    for (let i = 1; i <= Math.ceil(cardPacksTotalCount / pageCount); i++) {
        pages.push(i)
    }

    const nextPage = (page: number) => {
        dispatch(changeCurrentPageAC(page + 1))
    }

    if (!isAuth) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <>
            {isLoading
                ? <div className='wrapper'><Spinner/></div>
                : <div className='wrapper_packs'>
                    {pages.map((p, index) => {
                        let classes = page === p ? "page" : '';
                        if (p === 1 || p === cardPacksTotalCount || (p >= page - 2 && p <= page + 2)) {
                            return (
                                <span key={index}
                                      className={classes}
                                      onClick={() => {
                                          dispatch(changeCurrentPageAC(p))
                                      }}
                                >{p + ' '}</span>
                            )
                        }
                    })}
                    <button className="btn_pack"
                            onClick={() => {
                        nextPage(page)
                    }}>next
                    </button>
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
                            cardPacks.map((card) => <tr key={card._id}>
                                <td>{card.name}</td>
                                <td>{card.cardsCount}</td>
                                <td>{card.updated}</td>
                                <td></td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(deleteCardsPackTC(card._id))
                                    }}>delete
                                    </button>
                                    <button onClick={() => {
                                        dispatch(updateCardsPackTC({_id: card._id, name: "Vasya"}))
                                    }}>update
                                    </button>
                                    <NavLink to={'/cards'}>cards</NavLink>
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