import React from "react";
import {MenuButton} from "./MenuButton";
import {AddObject} from "../Actions/AddObject";

export const Menu = ({menuOpen, addObject, addObjectIsActive}) => {
    const activeStyle = {
        right: 0
    }
    return (
        <div style={menuOpen ? activeStyle : null} className="menu-content">
            <h2>Выберите действие</h2>
            <MenuButton actionIsActive={addObject} onClickAction={() => addObjectIsActive(!addObject)} title='Добавить объект'/>
            {addObject &&
                <AddObject/>
            }
        </div>
    )
}