import { Card } from 'components/Card/Card';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { IProduct } from 'interfaces/product';
import React, { useState } from 'react';
import star from 'data/star.svg'
import starOutlined from 'data/star-outlined.svg'

import styles from './ProductCard.module.scss'
import { Star } from 'components/Star/Star';
import Modal from 'antd/lib/modal/Modal';
import useModalVisible from 'hooks/useModalVisible';
import { CustomModal } from 'components/CustomModal/CustomModal';



export const ProductCard: React.FC<IProduct> = ({ image, name, description, rating }) => {
    const { modalVisible, onOpen, onClose} = useModalVisible()
    return <Card>
        <img src={image} alt={`${name} picture`} className={styles.image}/>
        <div className={styles.productCard}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
            <div className={styles.starsWrapper}>
                {[...Array(rating)].map((s, i) => <Star key={`star${i}`}/>)}
                {[...Array(5-rating)].map((s, i) => <Star key={`starOutlined${i}`} outlined />)}
            </div>
            <CustomButton type="primary" onClick={onOpen}> Show details </CustomButton>
            </div>
        </div>
        <CustomModal visible={modalVisible} onClose={onClose} image={image}>
            <h3>{name}</h3>
            <p>{description}</p>
        </CustomModal>
        </Card>

};
