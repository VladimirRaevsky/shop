import { type FC } from 'react';

import { ClassNames } from 'shared/lib';

import { Loader } from 'shared/ui/Loader';

import cls from './AppLoader.module.scss';

interface AppLoaderProps {
    className?: string;
}

/**
 * @param className - Class for controlling a component from outside.
 */

export const AppLoader: FC<AppLoaderProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.appLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
