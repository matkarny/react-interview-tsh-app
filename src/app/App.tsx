import React from 'react';
import AppStore from 'store/AppStore';
import { AppRoutes } from 'routing/AppRoutes';
import 'antd/dist/antd.css';
import './App.scss';


export const App = () => {
  return <AppStore><AppRoutes /></AppStore>;
};
