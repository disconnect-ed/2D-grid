import React, {useState} from "react";
import {MenuComponent} from "./MenuComponent";
import {
    addObjSelector, changeObjSelector,
    delObjSelector, findObjSelector, moveObjSelector,
    rotateObjSelector,
    showMessage
} from "../../utils/methods";
import {MenuModal} from "./MenuModal";

export const MenuContainer = ({menuOpen, data, setData, setMessage, toggleMenuOpen}) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [newX, setNewX] = useState(0)
    const [newY, setNewY] = useState(0)
    const [radius, setRadius] = useState(0)
    const [symbol, setSymbol] = useState('circle')
    const [fill, setFill] = useState('#000000')
    const [obj, setObj] = useState(null)
    const [modalIsOpen, toggleModalIsOpen] = useState(false)
    const showModal = (value) => {
        setX(value.x)
        setY(value.y)
        setSymbol(value.symbol)
        setFill(value.fill)
        setObj(value)
        console.log(value)
        toggleModalIsOpen(true)
    };

    const hideModal = () => {
        toggleModalIsOpen(false)
        restart()
    };
    const changeX = (value) => {
        setX(value)
    }
    const changeY = (value) => {
        setY(value)
    }
    const changeNewX = (value) => {
        setNewX(value)
    }
    const changeNewY = (value) => {
        setNewY(value)
    }
    const changeFill = (value) => {
        setFill(value)
    }
    const changeRadius = (value) => {
        setRadius(value)
    }
    const restart = () => {
        changeX(0)
        changeY(0)
        changeFill('#000000')
        changeRadius(0)
        changeNewX(0)
        changeNewY(0)
        setSymbol('circle')
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
        console.log(data)
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
            showMessage()
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
        let newData = await rotateObjSelector(currentData, (currentX + currentRadius), currentY, 1000)
        setData(newData)
        newData = await rotateObjSelector(currentData, currentX, (currentY + currentRadius), 1000)
        setData(newData)
        newData = await rotateObjSelector(currentData, (currentX - currentRadius), currentY, 1000)
        setData(newData)
        newData = await rotateObjSelector(currentData, currentX, (currentY - currentRadius), 1000)
        setData(newData)
        newData = await rotateObjSelector(currentData, (currentX + currentRadius), currentY, 1000)
        setData(newData)
        newData = await rotateObjSelector(currentData, currentX, currentY, 1000)
        result = data.findIndex(item => item.animate === true)
        delete newData[result].animate
        setData(newData)
        restart()
        toggleMenuOpen(true)
    }
    const moveObj = () => {
        const result = moveObjSelector(data, {x: +x, y: +y}, {x: +newX, y: +newY})
        if (typeof result === 'string') {
            setMessage(result)
            showMessage()
            return
        }
        setData(result)
        restart()
    }
    const changeObj = () => {
        const newObj = {...obj}
        newObj.x = +x
        newObj.y = +y
        newObj.fill = fill
        newObj.symbol = symbol
        const result = changeObjSelector(data, obj, newObj)
        if (typeof result === 'string') {
            setMessage(result)
            showMessage()
            return
        }
        setData(result)
        hideModal()
    }
    return (

        <>
            <MenuComponent menuOpen={menuOpen} x={x} changeX={changeX} newX={newX} changeNewX={changeNewX}
                           y={y} changeY={changeY} addObj={addObj} newY={newY} changeNewY={changeNewY}
                           setSymbol={setSymbol} delObj={delObj} rotateObj={rotateObj}
                           fill={fill} changeFill={changeFill} restart={restart} moveObj={moveObj}
                           changeRadius={changeRadius} radius={radius} searchObj={searchObj}
            />
            <MenuModal changeFill={changeFill} fill={fill} hideModal={hideModal}
                       modalIsOpen={modalIsOpen} x={x} changeX={changeX} y={y} changeY={changeY}
                       setSymbol={setSymbol} symbol={symbol} changeObj={changeObj}/>
        </>
    )
}