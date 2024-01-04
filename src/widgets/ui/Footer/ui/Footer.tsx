import { type FC } from 'react';

import { type FooterProps } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './Footer.module.scss';

export const Footer: FC<FooterProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.footer, {}, [className])}>Footer</div>
    );
};
