import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { type ListType, LIST_ITEMS } from 'widgets/ui/Header/ui/NavBar/const';

import { type UseToggleClassResult } from './types';

export function useToggleClass(): UseToggleClassResult {
    const [listElements, setListElements] = useState<ListType[]>(LIST_ITEMS);

    const location = useLocation();

    const toggleClassHandler = (index: number): void => {
        const newList = listElements.map((el, i) =>
            i !== index ? { ...el, hover: false } : { ...el, hover: true },
        );

        setListElements(newList);
    };

    useEffect(() => {
        const path =
            location.pathname.length > 1
                ? location.pathname.slice(1)
                : location.pathname;

        const newList = listElements.map((el) => {
            if (el.to !== path) {
                return {
                    ...el,
                    hover: false,
                };
            } else {
                return {
                    ...el,
                    hover: true,
                };
            }
        });
        setListElements(newList);
    }, []);

    return {
        listElements,
        toggleClassHandler,
    };
}
