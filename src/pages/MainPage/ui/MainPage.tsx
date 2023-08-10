import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MyInput } from 'shared/ui/MyInput';
import { IMyInputSize } from 'shared/ui/MyInput/ui/MyInput';

import cls from './MainPage.module.scss';

interface MainePageProps {
    className?: string;
}

const MainPage: FC<MainePageProps> = () => {
    const { t } = useTranslation('home');

    return (
        <div className={cls.MainPage}>
            <MyInput type='text' placeholder='Search' size={IMyInputSize.M} />
            <MyInput
                type='text'
                placeholder='Subscribe'
                desc='Subscribe'
                size={IMyInputSize.L}
            />
            <MyInput type='text' size={IMyInputSize.XL} />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
