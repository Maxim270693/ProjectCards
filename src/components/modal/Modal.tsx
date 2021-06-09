import React from "react";
import './modal.scss'

type ModalType = {
    active: boolean
    setActive: (active: boolean) => void
    children: any
}

export const Modal = (props: ModalType) => {

    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}