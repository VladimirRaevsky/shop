import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ShopPage.module.scss';

interface ShopPageProps {
    className?: string;
}

const ShopPage: FC<ShopPageProps> = () => {
    const { t } = useTranslation('home');

    return <div className={cls.ShopPage}>{t('Главная страница')}</div>;
};

export default ShopPage;
