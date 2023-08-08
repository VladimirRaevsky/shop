import { type FC } from 'react'
import { ClassNames } from 'shared/lib'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'

import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import { useTranslation } from 'react-i18next'

import cls from './NotFound.module.scss'

interface NotFoundProps {
    className?: string
}

export const NotFound: FC<NotFoundProps> = (props) => {
    const { className = '' } = props

    const { t } = useTranslation('404')

    return (
        <div className={ClassNames(cls.notFound, {}, [className])}>
            <div className="wrapper">
                <h1 className={cls.title}>{t('Страница не найдена')}</h1>

                <div className={cls.cipher}>
                    <p>4</p>

                    <span>0</span>

                    <p>4</p>
                </div>
                <div className="description">{t('Попробуйте')}:</div>

                <Button theme={ButtonTheme.ACTIVE}>
                    <AppLink theme={AppLinkTheme.UNALTERED} to={'/'} className={cls.left}>
                        {t('На главную')}
                    </AppLink>
                </Button>
            </div>
        </div>
    )
}
