import { useFetchProducts } from 'hooks/useFetchProducts';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { LoadingOutlined } from '@ant-design/icons';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { Spinner } from 'components/Spinner/Spinner';
import { CustomPagination } from 'components/CustomPagination/CustomPagination';
import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox';
import {Title} from 'components/Title/Title';
import { ProductCard } from './components/ProductCard/ProductCard';
import { Col, Row } from 'antd';
import { PageContent } from './components/PageContent/PageContent';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import EmptyPage from './components/EmptyPage/EmptyPage';
import {isMobile} from 'react-device-detect';
import styles from './Products.module.scss'

export const Products = () => {
  const { loading, products, getProducts} = useFetchProducts()
  useEffect(() => {
    const productsToFind = isMobile ? 4 : 8
    getProducts(productsToFind, 1, false, false)
    console.log(products)
    console.log(loading)
    
  }, [])
  
  return (
    <div className={styles.productsWrapper}>
      <Header />
      <PageContent>
      <Row gutter={[32, 32]} justify="center" align="middle">
        {loading ? <Col span={2}><Spinner /></Col> : (products &&  !!products.length) ? products.map(product => <Col span={24} lg={6}><ProductCard {...product}/></Col>) : <Col lg={12} span={24}><EmptyPage /></Col> }
      </Row>
      </PageContent>
      {(products && !!products.length) && <Footer />}
    </div>
  );
};
