import React from "react";
import './Input.scss'

export const Input = ({type, placeholder}) => {
    return (
        <input className='input' placeholder={placeholder} type={type}/>
    )
}