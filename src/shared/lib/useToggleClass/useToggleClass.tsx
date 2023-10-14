import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
    type ListType,
    __LIST_ITEMS__,
} from 'widgets/ui/Header/ui/NavBar/const';

export interface UseToggleClassResult {
    listElements: ListType[];
    handlerToggleClass: (index: number) => void;
}

export function useToggleClass(): UseToggleClassResult {
    const [listElements, setListElements] =
        useState<ListType[]>(__LIST_ITEMS__);

    const location = useLocation();

    const path =
        location.pathname.length > 1
            ? location.pathname.slice(1)
            : location.pathname;

    const handlerToggleClass = (index: number): void => {
        const newList = listElements.map((el, i) =>
            i !== index ? { ...el, hover: false } : { ...el, hover: true },
        );

        setListElements(newList);
    };

    useEffect(() => {
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
    }, [path]);

    return {
        listElements,
        handlerToggleClass,
    };
}
