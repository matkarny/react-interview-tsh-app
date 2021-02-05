import { useFetchProducts } from 'hooks/useFetchProducts';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { LoadingOutlined } from '@ant-design/icons';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { CustomButton } from 'components/Button/Button';

export const Products = () => {
  const { loading, products, getProducts} = useFetchProducts()
  useEffect(() => {
    getProducts(8, 1, false, false)
    console.log(products)
    console.log(loading)
  }, [])
  
  return (
    <>
      <h2>Products page</h2>
      <SearchBar />
      <CustomButton type="primary" disabled> Disabled button </CustomButton>
      <CustomButton type="outlined" disabled> Disabled button </CustomButton>

      <Link to={AppRoute.login}> Login </Link>
      <div>
        {loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : (products &&  products.length) ? products.map(product => <p>{product.name}</p>) : <p> no products</p> }
      </div>
    </>
  );
};
