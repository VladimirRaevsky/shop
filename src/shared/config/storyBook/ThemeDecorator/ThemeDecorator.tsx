import { type StoryContext, type StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProviders';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = () => (Story: StoryFn, context: StoryContext) => {
    const { globals } = context;

    return (
        <ThemeProvider themeProps={globals.theme}>
            <Story />
        </ThemeProvider>
    );
};
