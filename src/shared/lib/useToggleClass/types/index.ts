import { type ListType } from 'widgets/ui/Header/ui/NavBar/const';

export interface UseToggleClassResult {
    listElements: ListType[];
    handlerToggleClass: (index: number) => void;
}
