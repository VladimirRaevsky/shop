import { type FC } from 'react';
import { ClassNames } from 'shared/lib';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
