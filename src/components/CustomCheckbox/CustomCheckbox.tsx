import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';

import styles from './CustomCheckbox.module.scss'

interface ICustomCheckbox {
    children: React.ReactNode
}

export const CustomCheckbox: React.FC<ICustomCheckbox> = ({ children }) => {
    return <div ><Checkbox className={styles.checkboxWrapper}> {children}</Checkbox> </div>

};
