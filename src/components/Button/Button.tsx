import React from 'react';

import styles from './Button.module.scss'
import Button from 'antd/lib/button';

interface IButton {
    children: React.ReactNode
    type: "primary" | "outlined",
    disabled?: boolean
}

enum ButtonType {
    PRIMARY = 'primary',
    OUTLINED = 'default'
}

const pickType = (type: string) =>{
    switch(type){
        case ButtonType.PRIMARY:
            return ButtonType.PRIMARY
        case 'outlined':
            return ButtonType.OUTLINED
        default:
            return ButtonType.OUTLINED
    }
}

const pickStyle = (type: string) =>{
    switch(type){
        case ButtonType.PRIMARY:
            return styles.buttonPrimary
        case 'outlined':
            return styles.buttonOutlined
        default:
            return styles.buttonOutlined
    }
}


export const CustomButton: React.FC<IButton> = ({ children, type, disabled }) => {
    return <div className={pickStyle(type)}><Button type={pickType(type)}  disabled={disabled}>{children}</Button></div>

};
