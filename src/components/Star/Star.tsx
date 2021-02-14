import React from 'react';
import styles from './Star.module.scss';

import { ReactComponent as StarOutlinedIcon } from 'data/star-outlined.svg';
import { ReactComponent as StarIcon } from 'data/star.svg';

interface IStar {
    outlined?: boolean
}

export const Star: React.FC<IStar> = ({ outlined }) => {
    return <>{outlined ? <StarOutlinedIcon className={styles.starOutlined}/> : <StarIcon className={styles.star}/> }</>
};

export default Star