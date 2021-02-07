import React from 'react';
import star from 'data/star.svg'
import starOutlined from 'data/star-outlined.svg'

import { ReactComponent as StarIcon } from 'data/star.svg';
import { ReactComponent as StarOutlinedIcon } from 'data/star-outlined.svg';

import styles from './Star.module.scss'

interface IStar {
    outlined?: boolean
}

export const Star: React.FC<IStar> = ({ outlined }) => {
    return <>{outlined ? <StarOutlinedIcon className={styles.starOutlined}/> : <StarIcon className={styles.star}/> }</>

};
