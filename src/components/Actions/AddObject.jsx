import React from "react";
import {Input} from "../common/Input/Input";
import './Actions.scss'

export const AddObject = () => {
    return (
        <div className="action">
            <div className='action-block'>
                <span>X: </span>
                <Input type='number' placeholder='Введите Х'/>
            </div>
            <div className='action-block'>
                <span>Y: </span>
                <Input type='number' placeholder='Введите Y'/>
            </div>
        </div>
    )
}