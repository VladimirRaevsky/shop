import { Card } from 'antd';
import { type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './CardProduct.module.scss';

const { Meta } = Card;

interface CardProps {
    className?: string;
    url: string;
    title: string;
}

export const CardProduct: FC<CardProps> = (props) => {
    const { className = '', title, url, ...other } = props;

    return (
        <Card
            className={ClassNames(cls.card, {}, [className])}
            title={title}
            hoverable
            style={{ width: 240 }}
            cover={<img alt='example' src={url} />}
            {...other}
        >
            <Meta title={title} description={title} />
        </Card>
    );
};
