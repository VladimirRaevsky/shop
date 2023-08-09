import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';

interface SwitcherLangProps {
    className?: string;
    short?: boolean;
}

export const SwitcherLang: FC<SwitcherLangProps> = (props) => {
    const { className = '', short = false } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={ClassNames('', {}, [className])}
            theme={ButtonTheme.BORDER}
            onClick={toggleLang}
        >
            {t(short ? 'Короткий' : 'Язык')}
        </Button>
    );
};
