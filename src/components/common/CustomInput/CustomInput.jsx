import React from "react";
import {Input} from "antd";
import '../СustomElements.scss'

export const CustomInput = ({labelTitle, placeholder, type, id, htmlFor, value, onChange}) => {
    return (
        <div className="custom-block">
            <label htmlFor={htmlFor}>{labelTitle}</label>
            <Input value={value} onChange={(e) => onChange(e.target.value)}
                   id={id} placeholder={placeholder} type={type} />
        </div>
    )
}