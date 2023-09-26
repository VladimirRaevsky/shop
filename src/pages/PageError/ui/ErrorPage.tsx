import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassNames } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';
import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';

import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}
const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { className = '' } = props;
    const { t } = useTranslation('errorboundary');

    const onThrow = (): void => {
        location.reload();
    };

    return (
        <div className={ClassNames(cls.pageError, {}, [className])}>
            <span>{t('ОШИБКА')}</span>
            <CustomButton
                type={ButtonType.BUTTON}
                theme={ButtonTheme.CLEAR}
                onClick={onThrow}
            >
                {t('Перезагрузить')}
            </CustomButton>
        </div>
    );
};

export default ErrorPage;
