import React from 'react';
import styles from './CustomModal.module.scss'
import Modal from 'antd/lib/modal/Modal';

import { ReactComponent as Close } from 'data/close.svg';

interface ICustomModal {
    visible: boolean;
    onClose: () => void;
    image?: string;
    children: React.ReactNode
}

export const CustomModal: React.FC<ICustomModal> = ({ visible, onClose, children, image }) => {
    const maskStyle = {
        backgroundColor: '#1A1B1D',
        opacity: '0.9'
    }
    return <Modal visible={visible} onCancel={onClose} closeIcon={<Close />} className={styles.modal} footer={null} maskStyle={maskStyle}>
        {image && <img src={image} className={styles.image} alt="product" />}
        <div className={styles.modalBody}>
            {children}
        </div>
    </Modal>
};

export default CustomModal