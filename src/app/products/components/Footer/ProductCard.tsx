import { Card } from 'components/Card/Card';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { IProduct } from 'interfaces/product';
import React from 'react';
import star from 'data/star.svg'
import starOutlined from 'data/star-outlined.svg'

import styles from './ProductCard.module.scss'
import { Star } from 'components/Star/Star';



export const ProductCard: React.FC<IProduct> = ({ image, name, description, rating }) => {
    
    return <Card>
        <img src={image} alt={`${name} picture`} className={styles.image}/>
        <div className={styles.productCard}>
            <div className={styles.productDescription}>
            <h3>{name}</h3>
            <p>{description}</p>
            </div>
            <div>
            <div className={styles.starsWrapper}>
                {[...Array(rating)].map((s, i) => <Star key={`star${i}`}/>)}
                {[...Array(5-rating)].map((s, i) => <Star key={`starOutlined${i}`} outlined />)}
            </div>
            <CustomButton type="primary"> Show details </CustomButton>
            </div>
        </div>
        </Card>

};
