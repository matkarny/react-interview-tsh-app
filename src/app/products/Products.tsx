import { Col, Row } from 'antd';
import Spinner from 'components/Spinner/Spinner';
import { IProduct } from 'interfaces/product';
import React, { useContext } from 'react';
import { AppContext } from 'store/AppStore';
import EmptyPage from '../../components/EmptyPage/EmptyPage';
import Footer  from './components/Footer/Footer';
import  Header  from './components/Header/Header';
import  PageContent  from '../../components/PageContent/PageContent';
import  ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Products.module.scss';

export const Products = () => {
  const { state } = useContext(AppContext);
  const { loading, products } = state

  return (
    <div className={styles.productsWrapper}>
      <Header />
      <PageContent>
        <Row gutter={[32, 32]} justify="center" align="middle">
          {loading ? <Col span={2}><Spinner /></Col> : (products && !!products.length) ? products.map((product: IProduct) => <Col span={24} lg={6} key={product.name}><ProductCard {...product} /></Col>) : <Col span={24}><EmptyPage /></Col>}
        </Row>
      </PageContent>
      {(products && !!products.length) && <Footer />}
    </div>
  );
};
