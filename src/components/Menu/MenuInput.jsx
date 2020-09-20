import React from "react";
import {Input} from "antd";

export const MenuInput = ({labelTitle, placeholder, type, id, htmlFor, value, onChange}) => {
    return (
        <div className="menu-content-block">
            <label htmlFor={htmlFor}>{labelTitle}</label>
            <Input value={value} onChange={(e) => onChange(e.target.value)}
                   id={id} placeholder={placeholder} type={type} />
        </div>
    )
}