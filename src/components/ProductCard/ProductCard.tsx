import React from 'react';
import CustomCard from 'components/CustomCard/CustomCard';
import CustomButton from 'components/CustomButton/CustomButton';
import CustomModal from 'components/CustomModal/CustomModal';
import Star from 'components/Star/Star';
import useModalVisible from 'hooks/useModalVisible';
import SkeletonImage from 'antd/lib/skeleton/Image';
import Skeleton from 'antd/lib/skeleton';
import { IProduct } from 'interfaces/product';
import styles from './ProductCard.module.scss';

export const ProductCard: React.FC<IProduct> = ({ image, name, description, rating, promo, active }) => {
    const { modalVisible, onOpen, onClose } = useModalVisible()
    return <CustomCard>
        {image ? <img src={image} alt={`${name}`} className={active ? styles.image : styles.imageDisabled} /> : <SkeletonImage />}
        {(name && description && rating) ?
            <div className={styles.productCard}>
                <h3>{name}</h3>
                <p>{description}</p>
                <div>
                    <div className={styles.starsWrapper}>
                        {[...Array(rating)].map((s, i) => <Star key={`star${i}`} />)}
                        {[...Array(5 - rating)].map((s, i) => <Star key={`starOutlined${i}`} outlined />)}
                    </div>
                    <CustomButton type="primary" onClick={onOpen} disabled={!active}>{!active ? 'Unavailable' : 'Show details'}</CustomButton>
                </div>
            </div> :
            <Skeleton active />}
        <CustomModal visible={modalVisible} onClose={onClose} image={image}>
            <h3>{name}</h3>
            <p>{description}</p>
        </CustomModal>
        {promo && <span className={styles.promo}> Promo </span>}
    </CustomCard>

};

export default ProductCard