import { type FC } from 'react';
import { Hourglass } from 'react-loader-spinner';

import { useTheme } from 'shared/lib';

import cls from './Loader.module.scss';

export const Loader: FC = () => {
    const { theme } = useTheme();

    return (
        <Hourglass
            visible={true}
            height='80'
            width='80'
            ariaLabel='hourglass-loading'
            wrapperStyle={{}}
            wrapperClass={cls.loader}
            colors={['#306cce', theme === 'light' ? '#272727' : '#ffffff']}
        />
    );
};
