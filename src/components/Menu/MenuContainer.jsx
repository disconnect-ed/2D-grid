import React, {useState} from "react";
import {MenuComponent} from "./MenuComponent";
import {
    addObjSelector,
    delObjSelector, findObjSelector,
    moveObjSelector,
    showMessage
} from "../../utils/methods";
import {ModalComponent} from "../Modal/ModalComponent";

export const MenuContainer = ({menuOpen, data, setData, setMessage, toggleMenuOpen}) => {
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    const [radius, setRadius] = useState('')
    const [symbol, setSymbol] = useState('circle')
    const [fill, setFill] = useState('#000000')
    const [objData, setObjData] = useState(null)
    const [modalIsOpen, toggleModalIsOpen] = useState(false)
    const showModal = (value) => {
        setObjData(value)
        toggleModalIsOpen(true)
    };

    const hideModal = e => {
        toggleModalIsOpen(false)
        setObjData(null)
    };
    const changeX = (value) => {
        setX(value)
    }
    const changeY = (value) => {
        setY(value)
    }
    const changeFill = (value) => {
        setFill(value)
    }
    const changeRadius = (value) => {
        setRadius(value)
    }
    const restart = () => {
        changeX('')
        changeY('')
        changeFill('#000000')
        changeRadius('')
    }
    const addObj = () => {
        const newObj = {x: +x, y: +y, symbol, fill}
        const result = addObjSelector(data, newObj)
        restart()
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
        restart()
        setData([...result])
    }
    const searchObj = () => {
        const result = findObjSelector(data, {x: +x, y: +y})
        if (!result) {
            setMessage('Объект не найден! :(')
            return
        }
        showModal(result)
    }
    const rotateObj = async () => {
        const currentRadius = +radius
        const currentX = +x
        const currentY = +y
        let result = data.findIndex(item => item.x === currentX && item.y === currentY)
        if (result < 0) {
            setMessage('Объекта с такими координатами не существует! Создайте его.')
            showMessage()
            return
        }
        toggleMenuOpen(false)
        const currentData = [...data]
        currentData[result].animate = true
        let newData = await moveObjSelector(currentData, (currentX + currentRadius), currentY, 1000)
        setData(newData)
        newData = await moveObjSelector(currentData, currentX, (currentY + currentRadius), 1000)
        setData(newData)
        newData = await moveObjSelector(currentData, (currentX - currentRadius), currentY, 1000)
        setData(newData)
        newData = await moveObjSelector(currentData, currentX, (currentY - currentRadius), 1000)
        setData(newData)
        newData = await moveObjSelector(currentData, (currentX + currentRadius), currentY, 1000)
        setData(newData)
        newData = await moveObjSelector(currentData, currentX, currentY, 1000)
        result = data.findIndex(item => item.animate === true)
        delete newData[result].animate
        setData(newData)
        restart()
        toggleMenuOpen(true)
    }
    return (

        <>
            <MenuComponent menuOpen={menuOpen} x={x} changeX={changeX}
                           y={y} changeY={changeY} addObj={addObj}
                           setSymbol={setSymbol} delObj={delObj} rotateObj={rotateObj}
                           fill={fill} changeFill={changeFill} restart={restart}
                           changeRadius={changeRadius} radius={radius} searchObj={searchObj}
            />
            <ModalComponent objData={objData} hideModal={hideModal} modalIsOpen={modalIsOpen} />
        </>
    )
}