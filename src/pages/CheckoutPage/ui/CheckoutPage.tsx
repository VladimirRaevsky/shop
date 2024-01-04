import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type CheckoutPageProps } from '../types';

import cls from './CheckoutPage.module.scss';

const CheckoutPage: FC<CheckoutPageProps> = () => {
    const { t } = useTranslation('Pages');

    return <div className={cls.Pages}>{t('CheckoutPage')}</div>;
};

export default CheckoutPage;
