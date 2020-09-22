import React from "react";
import {Modal} from "antd";
import {MenuInput} from "./MenuInput";
import {MenuSelect} from "./MenuSelect";

export const MenuModal = ({hideModal, modalIsOpen, x, y, changeX, changeY, changeFill, fill,
                              setSymbol, symbol, changeObj}) => {
    return (
        <Modal
            title="Изменить объект"
            visible={modalIsOpen}
            onOk={changeObj}
            onCancel={hideModal}
            cancelText='Отмена'
        >
            <div className="menu-modal">
                <MenuInput id='objX' placeholder='Введите координату X' type='number'
                           htmlFor='objX' labelTitle='Координата X:'
                           onChange={changeX} value={x}
                />
                <MenuInput id='objY' placeholder='Введите координату Y' type='number'
                           htmlFor='objY' labelTitle='Координата Y:'
                           onChange={changeY} value={y}
                />
                <MenuSelect value={symbol} id='objSymbol' htmlFor='objSymbol'
                            onChange={setSymbol} title='Символ'/>
                <MenuInput id='objColor' type='color'
                           htmlFor='objColor' labelTitle='Цвет:'
                           onChange={changeFill} value={fill}
                />
            </div>
        </Modal>
    )
}