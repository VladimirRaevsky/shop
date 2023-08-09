import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');

    return <div className={cls.AboutPage}>{t('О нас страница')}</div>;
};

export default AboutPage;
