import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';

import { MenuToggle } from '../MenuToggle/MenuToggle';

import { Navigation } from '../Navigation/Navigation';

import { ClassNames, useDimensions } from 'shared/lib';

import cls from './SideBar.module.scss';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at 40px 40px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

export const SideBar = (): any => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
            className={cls.sideBar}
        >
            <motion.div
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                className={ClassNames(cls.background, {}, [])}
                variants={sidebar}
            />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};
