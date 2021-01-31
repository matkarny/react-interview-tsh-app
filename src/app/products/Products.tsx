import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import AppService from 'services/AppService';

export const Products = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    const res = AppService.getProducts(400, 1, false, false)

  }, [])
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
    </>
  );
};
