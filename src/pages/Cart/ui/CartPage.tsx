import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type CartPageProps } from '../types';

import cls from './CartPage.module.scss';

const CartPage: FC<CartPageProps> = () => {
    const { t } = useTranslation('home');

    return <div className={cls.CartPage}>{t('Главная страница')}</div>;
};

export default CartPage;
