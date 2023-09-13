import { type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.footer, {}, [className])}>Footer</div>
    );
};
