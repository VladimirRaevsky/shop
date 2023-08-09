import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './CheckoutPage.module.scss';

interface CheckoutPageProps {
    className?: string;
}

const CheckoutPage: FC<CheckoutPageProps> = () => {
    const { t } = useTranslation('Pages');

    return <div className={cls.Pages}>{t('CheckoutPage')}</div>;
};

export default CheckoutPage;
