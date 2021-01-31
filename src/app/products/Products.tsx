import { useFetchProducts } from 'hooks/useFetchProducts';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import AppService from 'services/AppService';
import { LoadingOutlined } from '@ant-design/icons';

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
      <Link to={AppRoute.login}> Login </Link>
      <div>
        {loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : (products &&  products.length) ? products.map(product => <p>{product.name}</p>) : <p> no products</p> }
      </div>
    </>
  );
};
