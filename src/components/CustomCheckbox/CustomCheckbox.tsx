import Checkbox, { CheckboxProps } from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import styles from './CustomCheckbox.module.scss';

export const CustomCheckbox: React.FC<CheckboxProps> = (props) => {
    return <Checkbox className={styles.checkboxWrapper} {...props} />
};

export default CustomCheckbox