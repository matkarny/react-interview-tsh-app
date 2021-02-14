import React from 'react';

import styles from './CustomButton.module.scss'
import Button from 'antd/lib/button';
import clsx from 'clsx'
import { ButtonHTMLType } from 'antd/lib/button/button';

interface IButton {
    children: React.ReactNode
    type: "primary" | "outlined",
    disabled?: boolean
    className?: string;
    htmlType?: ButtonHTMLType;
    onClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) ;
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


export const CustomButton: React.FC<IButton> = ({ children, type, disabled, className, htmlType,  onClick }) => {
    return <div className={clsx(pickStyle(type), className)}><Button type={pickType(type)}  disabled={disabled} onClick={onClick} htmlType={htmlType}>{children}</Button></div>

};

export default CustomButton