import React from "react";
import './Message.scss'
import InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";

export const Message = ({message}) => {
    return (
        <div className="error">
            <div className="error-icon">
                <InfoCircleOutlined style={{color: '#1890FF', fontSize: '50px'}} />
            </div>
            <p className="error-text">
                {message || 'Неизвестная ошибка :('}
            </p>
        </div>
    )
}