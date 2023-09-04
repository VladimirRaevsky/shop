import { type Preview } from '@storybook/react';
import { StyleDecorator } from '../../../shop/src/shared/config/storyBook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../../shop/src/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { LangDecorator } from '../../../shop/src/shared/config/storyBook/LangDecorator/LangDecorator';
import { RouterDecorator } from '../../../shop/src/shared/config/storyBook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../../shop/src/shared/config/storyBook/StoreDecorator/StoreDecorator';

const preview: Preview = {
    decorators: [
        StyleDecorator,
        ThemeDecorator(),
        LangDecorator,
        RouterDecorator,
        StoreDecorator
    ],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark', 'purple'],
                dynamicTitle: true,
            },
        },
        locale: {
            name: 'Locale',
            description: 'Internationalization locale',
            toolbar: {
                title: 'locale',
                icon: 'globe',
                items: [
                    { value: 'en', right: 'us', title: 'English' },
                    { value: 'ru', right: '🇷🇺', title: 'Русский' },
                ],
                dynamicTitle: true,
            },
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#fff' },
                { name: 'dark', value: '#383939' },
                { name: 'purple', value: 'rgb(248, 244, 251)' },
            ],
        },
    },
};

export default preview;
