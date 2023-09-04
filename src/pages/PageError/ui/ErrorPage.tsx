import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';
import { MyButton } from 'shared/ui/Button';
import { MyButtonTheme } from 'shared/ui/Button/ui/MyButton';
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

export default ErrorPage