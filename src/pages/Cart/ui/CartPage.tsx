import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './CartPage.module.scss';

interface CartPageProps {
    className?: string;
}

const CartPage: FC<CartPageProps> = () => {
    const { t } = useTranslation('home');

    return <div className={cls.CartPage}>{t('Главная страница')}</div>;
};

export default CartPage;
