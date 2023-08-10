import { useCallback, useState, type FC } from 'react';
import { ClassNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';

import cls from './Header.module.scss';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcherButton } from 'features/SwitcherButton';
import { NavBar } from './NavBar';
import { MyContainer } from 'shared/ui/MyContainer';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = () => {
    const [isAuth, setIsAuth] = useState(false);

    const { t } = useTranslation();

    const isAuthHandler = useCallback((): void => {
        setIsAuth((prev) => !prev);
    }, []);

    return (
        <header className={ClassNames(cls.Header, {}, [])}>
            <MyContainer>
                <div className={cls.wrapper}>
                    <div className={cls.logo}>MiniStore</div>
                    <div className='center'>
                        <NavBar />
                    </div>
                    <div className='right'>
                        <ThemeSwitcherButton />
                        <Button
                            theme={ButtonTheme.BACKGROUND}
                            className={cls.right}
                            onClick={isAuthHandler}
                        >
                            {t('Войти')}
                        </Button>
                    </div>
                </div>
            </MyContainer>
        </header>
    );
};
