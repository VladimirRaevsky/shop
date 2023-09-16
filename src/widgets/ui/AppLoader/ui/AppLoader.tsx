import { type FC } from 'react';

import { ClassNames } from 'shared/lib';

import { Loader } from 'shared/ui/Loader';

import cls from './AppLoader.module.scss';

interface AppLoaderProps {
    className?: string;
}

export const AppLoader: FC<AppLoaderProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.appLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
