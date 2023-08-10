import { type ReactNode, type FC } from 'react';
import { ClassNames } from 'shared/lib';
import cls from './MyContainer.module.scss';

interface MyContainerProps {
    className?: string;
    children: ReactNode;
}

export const MyContainer: FC<MyContainerProps> = (props) => {
    const { className = '', children } = props;

    return (
        <div className={ClassNames(cls.myContainer, {}, [className])}>
            {children}
        </div>
    );
};
