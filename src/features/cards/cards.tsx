import React, {useEffect, useState} from 'react'
import './cards.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../main/bll/store";
import Spinner from "../../components/spinner/Spinner";
import {deleteCardTC, getCardsTC, postCardTC, updateCardTC} from "../../main/bll/cards-reducer";
import {Redirect, useParams} from "react-router-dom"
import {CardsType} from "../../main/dal/API";
import {PATH} from "../../main/ui/routes/Routes";
import {Modal} from "../../components/modal/Modal";


export const Cards = () => {

    const [modalActive, setModalActive] = useState(false)

    const dispatch = useDispatch()
    const cards = useSelector<RootStoreType, Array<CardsType>>((state) => state.cards.cards)
    const isLoading = useSelector<RootStoreType, boolean>((state) => state.user.isLoading)
    const isAuth = useSelector<RootStoreType, boolean>((state) => state.user.isAuth)

    const {id} = useParams<{ id: string }>()

    useEffect(() => {
        dispatch(getCardsTC(id))
    }, [id])

    if (!isAuth) {                          // не переходит на login, 404 error
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <>
            {isLoading
                ? <div className='wrapper'><Spinner/></div>
                : <div className="wrapper_cards">
                    <Modal active={modalActive} setActive={setModalActive}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, tempora.</p>
                        <button onClick={() => setModalActive(false)}>close</button>
                    </Modal>
                    <h5>Packs Page</h5>
                    <h4> Cards</h4>
                    <table id='table'>
                        <tbody id='body'>
                        <tr className="row0">
                            <td id="cell0-0">question</td>
                            <td id="cell0-1">answer</td>
                            <td id="cell0-2">grade</td>
                            <td id="cell0-2">updated</td>
                            <td id="cell0-2">url</td>
                            <td id="cell0-2">
                                <button onClick={() => {
                                    dispatch(postCardTC({cardsPack_id: id, answer: "balbal", question: 'yoyoyo'}))
                                    setModalActive(true)
                                }}>add
                                </button>
                            </td>
                        </tr>
                        {
                            cards.map((card) =>
                                <tr key={card._id}>
                                    <td>{card.question}</td>
                                    <td>{card.answer}</td>
                                    <td>{card.grade}</td>
                                    <td>{card.updated}</td>
                                    <td></td>
                                    <td>
                                        <button className='delete_btn' onClick={() => {
                                            dispatch(deleteCardTC(card._id))
                                        }}>delete
                                        </button>
                                        <button onClick={() => {
                                            dispatch(updateCardTC({
                                                _id: card._id,
                                                question: 'Who is Vasya?',
                                                answer: 'I am a Vasya'
                                            }))
                                        }}>update
                                        </button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>}
        </>
    )
}