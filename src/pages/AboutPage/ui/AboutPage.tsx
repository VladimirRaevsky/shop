import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type AboutPageProps } from '../types';

import cls from './AboutPage.module.scss';

const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');

    return <div className={cls.AboutPage}>{t('О нас страница')}</div>;
};

export default AboutPage;
