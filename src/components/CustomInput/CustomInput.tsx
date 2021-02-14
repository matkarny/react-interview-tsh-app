import React from 'react';
import styles from './CustomInput.module.scss'

export const CustomInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <input className={styles.input} {...props}/>

export default CustomInput