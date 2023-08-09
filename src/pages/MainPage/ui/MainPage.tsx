import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './MainPage.module.scss';

interface MainePageProps {
    className?: string;
}

const MainPage: FC<MainePageProps> = () => {
    const { t } = useTranslation('home');

    return <div className={cls.MainPage}>{t('Главная страница')}</div>;
};

export default MainPage;
