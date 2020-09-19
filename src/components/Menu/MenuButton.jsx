import React from "react";
import './Menu.scss'

export const MenuButton = ({title, onClickAction, actionIsActive}) => {
    const activeStyle = {
        backgroundColor: 'white',
        color: 'black'
    }
    return (
        <button style={actionIsActive ? activeStyle : null} className='menu-button' onClick={onClickAction}>
            {title}
        </button>
    )
}