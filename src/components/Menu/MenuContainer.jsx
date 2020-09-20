import React, {useState} from "react";
import {MenuComponent} from "./MenuComponent";
import {addObjSelector, delObjSelector, showMessage} from "../../utils/methods";

export const MenuContainer = ({menuOpen, data, setData, setMessage}) => {
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    const [symbol, setSymbol] = useState('circle')
    const [fill, setFill] = useState('#000000')
    const changeX = (value) => {
        setX(value)
    }
    const changeY = (value) => {
        setY(value)
    }
    const changeFill = (value) => {
        setFill(value)
    }
    const restart = () => {
        changeX('')
        changeY('')
        setFill('#000000')
    }
    const addObj = () => {
        const newObj = {x: +x, y: +y, symbol, fill}
        const result = addObjSelector(data, newObj)
        setX('')
        setY('')
        if (typeof result === 'string') {
            setMessage(result)
            showMessage()
            return
        }
        setData(result)
    }
    const delObj = () => {
        const result = delObjSelector(data, {x: +x, y: +y})
        if (typeof result === 'string') {
            setMessage(result)
            showMessage()
            return
        }
        setData([...result])
    }
    return (

        <MenuComponent menuOpen={menuOpen} x={x} changeX={changeX}
                       y={y} changeY={changeY} addObj={addObj}
                       setSymbol={setSymbol} delObj={delObj}
                       fill={fill} changeFill={changeFill} restart={restart}
        />

    )
}