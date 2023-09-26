import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { ClassNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { CustomButton } from 'shared/ui/CustomButton';
import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';

import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

const NotFound: FC<NotFoundProps> = (props) => {
    const { className = '' } = props;

    const { t } = useTranslation('404');

    return (
        <div className={ClassNames(cls.notFound, {}, [className])}>
            <div className='wrapper'>
                <h1 className={cls.title}>{t('Страница не найдена')}</h1>

                <div className={cls.cipher}>
                    <p>4</p>

                    <span>0</span>

                    <p>4</p>
                </div>
                <div className='description'>{t('Попробуйте')}:</div>

                <CustomButton
                    type={ButtonType.BUTTON}
                    theme={ButtonTheme.CLEAR}
                >
                    <AppLink
                        theme={AppLinkTheme.UNALTERED}
                        to={AppRoutes.MAIN}
                        className={cls.left}
                    >
                        {t('На главную')}
                    </AppLink>
                </CustomButton>
            </div>
        </div>
    );
};

export default NotFound;
