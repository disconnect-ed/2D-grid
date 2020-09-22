import React from "react";
import '../СustomElements.scss'
import {Button} from "antd";

export const CustomButton = ({title, onClickAction}) => {
    return (
        <div onClick={onClickAction} className="custom-block">
            <Button block type="primary">{title}</Button>
        </div>
    )
}