import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Login } from 'app/login/Login';
import { Products } from 'app/products/Products';

import { AppRoute } from './AppRoute.enum';
import AppStore from 'store/AppStore';

export const AppRoutes = () => {
  return (
    <AppStore>
    <Switch>
      <Route path={AppRoute.home} exact component={Products} />
      <Route path={AppRoute.login} component={Login} />
      <Redirect to={AppRoute.home} />
    </Switch>
    </AppStore>
  );
};
