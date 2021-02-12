import React from 'react';

import styles from './Input.module.scss'


export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <input className={styles.input} {...props}/>

export default Input