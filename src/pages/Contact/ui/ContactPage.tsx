import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ContactPage.module.scss'

interface ContactPageProps {
    className?: string
}

const ContactPage: FC<ContactPageProps> = () => {
    const { t } = useTranslation('about')

    return <div className={cls.ContactPage}>{t('Страница контактов')}</div>
}

export default ContactPage
