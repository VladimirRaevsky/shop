import { type FC } from 'react';

import { ClassNames } from 'shared/lib';

import { Loader } from 'shared/ui/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

/**
 * @param className - Class for controlling a component from outside.
 */

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
