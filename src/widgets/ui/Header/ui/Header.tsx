import { useCallback, useState, type FC } from 'react';
import { ClassNames, useTheme } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { NavBar } from './NavBar';
import { MyContainer } from 'shared/ui/MyContainer';
import Switch from 'antd/es/switch';

import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = () => {
    const [isAuth, setIsAuth] = useState(false);

    const { theme, themeToggleHandler } = useTheme();

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
                        <Switch
                            checked={theme === 'light'}
                            onChange={themeToggleHandler}
                            checkedChildren={t('светлая')}
                            unCheckedChildren={t('темная')}
                        />

                        <Button
                            theme={ButtonTheme.BACKGROUND}
                            className={cls.right}
                            onClick={isAuthHandler}
                        >
                            {t('войти')}
                        </Button>
                    </div>
                </div>
            </MyContainer>
        </header>
    );
};
