import React from "react";
import {Select} from "antd";

const {Option} = Select;

export const MenuSelect = ({title = 'Выберите символ:', defaultValue = 'circle', onChange,
                           id = 'addSelect', htmlFor = 'addSelect', value}) => {
    return (
        <div className="menu-content-block">
            <label htmlFor={htmlFor}>{title}</label>
            <Select id={id} value={value} defaultValue={defaultValue} style={{width: '100%'}}
                    onChange={onChange}>
                <Option value="circle">circle</Option>
                <Option value="star">star</Option>
                <Option value="square">square</Option>
                <Option value="diamond">diamond</Option>
                <Option value="triangleUp">triangleUp</Option>
            </Select>
        </div>
    )
}