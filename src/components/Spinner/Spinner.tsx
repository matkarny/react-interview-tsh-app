import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import styles from './Spinner.module.scss'


export const Spinner: React.FC = () => {
    return <div className={styles.spinnerWrapper}>
        <div className={styles.spinnerCircle}/>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 56 }} spin />} /> 
        </div>

};
