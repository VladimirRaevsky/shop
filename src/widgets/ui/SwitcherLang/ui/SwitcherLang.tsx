import Select from 'antd/es/select';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './SwitcherLang.module.scss';

interface SwitcherLangProps {
    className?: string;
}

export const SwitcherLang: FC<SwitcherLangProps> = (props) => {
    const { className = '' } = props;

    const { i18n } = useTranslation();

    const toggleLangHandler = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Select
            labelInValue
            defaultValue={{
                value: i18n.language === 'ru' ? 'Ру' : 'En',
                label: i18n.language === 'ru' ? 'Ру' : 'En',
            }}
            className={cls.select}
            onChange={toggleLangHandler}
            options={[
                {
                    value: 'Ру',
                    label: 'Ру',
                },
                {
                    value: 'En',
                    label: 'En',
                },
            ]}
        />
    );
};
