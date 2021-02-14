import { CustomButton } from 'components/CustomButton/CustomButton';
import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox';
import Logo from 'components/Logo/Logo';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useFetchProducts } from 'hooks/useFetchProducts';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { Context } from 'store/AppStore';
import styles from './Header.module.scss';


interface IHeader{
}

export const Header: React.FC<IHeader> = () => {
    const history = useHistory()
    const {state } = useContext(Context);
    const {setActiveState, setPromoState } = useFetchProducts()
    const { promo, active} = state
 
    return <div className={styles.header}>
            <Logo className={styles.logo}/>
            <SearchBar className={styles.search}/>
            <div className={styles.checkboxWrapper}>
                <CustomCheckbox onChange={setActiveState} checked={active}> Active</CustomCheckbox>
                <CustomCheckbox onChange={setPromoState} checked={promo}> Promo</CustomCheckbox>
            </div>
            <CustomButton type="outlined" className={styles.button} onClick={() => history.push(AppRoute.login)}>Log in</CustomButton>
        </div>

};
