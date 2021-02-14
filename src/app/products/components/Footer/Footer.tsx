import { CustomPagination } from 'components/CustomPagination/CustomPagination';
import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => <div className={styles.footer}>
                                <CustomPagination />
                            </div>
