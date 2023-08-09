import { type FC } from 'react';
import { ClassNames } from 'shared/lib';
import cls from './AppLoader.module.scss';
import { Loader } from 'shared/ui/Loader';

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
