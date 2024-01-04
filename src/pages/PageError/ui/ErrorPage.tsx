import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type ErrorPageProps } from '../types';

import { ClassNames } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';

import { ButtonTheme, ButtonType } from 'shared/ui/CustomButton/types';

import cls from './ErrorPage.module.scss';

const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { className = '' } = props;
    const { t } = useTranslation('errorboundary');

    const onThrow = (): void => {
        window.location.reload();
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
