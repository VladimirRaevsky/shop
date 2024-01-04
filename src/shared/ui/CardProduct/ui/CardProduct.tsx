import { Card } from 'antd';
import { type FC } from 'react';

import { type CardProps } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './CardProduct.module.scss';

/**
 * @param className - Class for controlling a component from outside.
 * @param url - Url images.
 * @param title - Title of card.
 * @param price - Price of card.
 */

export const CardProduct: FC<CardProps> = (props) => {
    const { className = '', title, url, price, ...other } = props;

    return (
        <div className={cls.container}>
            <Card
                className={ClassNames(cls.card, {}, [className])}
                hoverable
                cover={<img alt={title} src={url} />}
                {...other}
            >
                <div className={cls.description}>
                    <span className={cls.title}>{title}</span>{' '}
                    <span className={cls.price}>&#36;{price}</span>
                </div>
            </Card>
        </div>
    );
};
