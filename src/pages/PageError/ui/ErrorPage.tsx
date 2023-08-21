import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';
import { ClassNames } from 'shared/lib';
import { MyButton } from 'shared/ui/Button';
import { MyButtonTheme } from 'shared/ui/Button/ui/MyButton';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
    const { className = '' } = props;
    const error = useRouteError();
    console.log('error', error);
    const { t } = useTranslation('errorboundary');

    const onThrow = (): void => {
        location.reload();
    };

    return (
        <div className={ClassNames(cls.pageError, {}, [className])}>
            <p>{/* <i>{error.statusText || error.message}</i> */}</p>{' '}
            <span>{t('ОШИБКА')}</span>
            <MyButton
                type='button'
                theme={MyButtonTheme.ERROR}
                onClick={onThrow}
            >
                {t('Перезагрузить')}
            </MyButton>
        </div>
    );
};
