import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type ContactPageProps } from '../types';

import cls from './ContactPage.module.scss';

const ContactPage: FC<ContactPageProps> = () => {
    const { t } = useTranslation('about');

    return <div className={cls.ContactPage}>{t('Страница контактов')}</div>;
};

export default ContactPage;
