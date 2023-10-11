import { motion } from 'framer-motion';
import { type FC } from 'react';

import { MenuItem } from '../MenuItem/MenuItem';

import { ClassNames } from 'shared/lib';

import cls from './Navigation.module.scss';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemIds = [0, 1, 2, 3, 4];

export const Navigation: FC = (): any => {
    return (
        <motion.ul variants={variants} className={ClassNames(cls.nav, {}, [])}>
            {itemIds.map((i) => (
                <MenuItem i={i} key={i} />
            ))}
        </motion.ul>
    );
};
