import React from "react";
import './Menu.scss'

export const ToggleMenu = ({toggleMenuOpen, menuOpen}) => {
    const activeStyle = {
        backgroundColor: 'white',
        color: 'black'
    }
    return (
        <button style={menuOpen ? activeStyle : null} className='menu-toggle' onClick={() => toggleMenuOpen(!menuOpen)}>
            МЕНЮ
        </button>
    )
}