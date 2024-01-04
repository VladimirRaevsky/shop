import {
    type InputPlaceholder,
    type InputType,
    type StatusType,
} from 'shared/ui/InputForm/types';

export enum InputTheme {
    SUBSCRIBE = 'subscribe',
    SEARCH = 'search',
}

export interface InputProps {
    theme: InputTheme;
    type: InputType;
    placeholder: InputPlaceholder;
    className?: string;
    status?: StatusType;
}
