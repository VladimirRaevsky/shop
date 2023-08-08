import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ClassNames } from 'shared/lib'
import { Button } from 'shared/ui/Button'
import { ButtonTheme } from 'shared/ui/Button/ui/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className = '' } = props
    const { t } = useTranslation('errorboundary')

    const onThrow = (): void => {
        location.reload()
    }

    return (
        <div className={ClassNames(cls.pageError, {}, [className])}>
            <p>{t('В ПРИЛОЖЕНИИ ВОЗНИКЛА')}</p> <span>{t('ОШИБКА')}</span>
            <Button type="button" theme={ButtonTheme.ERROR} onClick={onThrow}>
                {t('Перезагрузить')}
            </Button>
        </div>
    )
}
