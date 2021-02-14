import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomButton from 'components/CustomButton/CustomButton';
import CustomInput from 'components/CustomInput/CustomInput';
import Logo from 'components/Logo/Logo';
import Title from 'components/Title/Title';
import { AppRoute } from 'routing/AppRoute.enum';
import styles from './Login.module.scss';
import loginPicture from 'data/login-picture.png';



export const Login = () => {
  const history = useHistory()
  return (
    <div className={styles.pageWrapper}>
      <img src={loginPicture} alt="running man" className={styles.image} />
      <div className={styles.loginWrapper}>
        <Logo className={styles.logo} />
        <div className={styles.formWrapper}>
          <Title size={30}>Login</Title>
          <form onSubmit={() => history.push(AppRoute.home)}>
            <div className={styles.formItem}>
              <label htmlFor="username">Username</label>
              <CustomInput id="username" name="username" placeholder="Enter username" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="password"> Password</label>
              <CustomInput id="password" name="password" type="password" placeholder="Enter password" />
            </div>
            <CustomButton type="primary" htmlType="submit" className={styles.button}>Log in</CustomButton>
            <a href="#" >Forgot password?</a>
          </form>
        </div>
      </div>
    </div>
  );
};
