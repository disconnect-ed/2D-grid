import React from "react";
import './Menu.scss'
import {Button} from "antd";

export const MenuButton = ({title, onClickAction}) => {
    return (
        <div onClick={onClickAction} className="menu-content-block">
            <Button block type="primary">{title}</Button>
        </div>
    )
}