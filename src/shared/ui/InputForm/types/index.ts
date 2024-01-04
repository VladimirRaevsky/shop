import { type ReactNode } from 'react';

export enum InputFormTheme {
    SMALL = 'size_m',
    BIG = 'size_l',
}

export enum InputPlaceholder {
    EMAIL = 'Your email address',
    SEARCH = 'Search',
    NAME = 'Name',
    PASSWORD = 'Password',
}

export enum InputType {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
}

export type DescriptionInput =
    | 'First name *'
    | 'Last name *'
    | 'Company name (optional)'
    | 'Country / Region *'
    | 'Street address *'
    | 'Town / City *'
    | 'State *'
    | 'ZIP Code *'
    | 'Phone *'
    | 'Email address *'
    | 'Order notes (optional)';

export type StatusType = 'warning' | 'error';

export interface InputFormProps {
    className?: string;
    placeholder: string;
    description?: DescriptionInput;
    type: InputType;
    status?: StatusType;
    prefix?: ReactNode;
    theme: InputFormTheme;
    value?: string | number;
    onChange?: (value: string) => void;
}
