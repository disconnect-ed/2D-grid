import React from "react";
import {Modal} from "antd";

export const ModalComponent = ({modalIsOpen, hideModal, objData}) => {
    if (!objData) return null
    return (
        <Modal
            title="Объект найден"
            visible={modalIsOpen}
            onOk={hideModal}
            onCancel={hideModal}
            cancelText='Отмена'
        >
            <p>Координата Х: {objData.x}</p>
            <p>Координата Y: {objData.y}</p>
            <p>Цвет: {objData.fill || 'black'}</p>
            <p>Символ: {objData.symbol || 'circle'}</p>
        </Modal>
    )
}