import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MyInput } from 'shared/ui/MyInput';
import {
    MyInputPlaceholder,
    MyInputSize,
    MyInputTheme,
} from 'shared/ui/MyInput/ui/MyInput';
import { InputType } from 'shared/ui/MyInputForm/ui/MyInputForm';

import cls from './MainPage.module.scss';

interface MainePageProps {
    className?: string;
}

const MainPage: FC<MainePageProps> = () => {
    const { t } = useTranslation('home');

    return (
        <div className={cls.MainPage}>
            <MyInput
                type={InputType.TEXT}
                size={MyInputSize.M}
                theme={MyInputTheme.SEARCH}
                placeholder={MyInputPlaceholder.SEARCH}
            />

            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
