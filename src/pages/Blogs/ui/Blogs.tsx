import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type BlogsProps } from '../types';

import cls from './Blogs.module.scss';

const Blogs: FC<BlogsProps> = () => {
    const { t } = useTranslation('about');

    return <div className={cls.Blogs}>{t('Blogs')}</div>;
};

export default Blogs;
