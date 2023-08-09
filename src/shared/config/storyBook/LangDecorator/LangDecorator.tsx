import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { type StoryContext, type StoryFn } from '@storybook/react';
import i18n from '../../i18n/i18nForStorybook';

export const LangDecorator = (
    Story: StoryFn,
    context: StoryContext,
): JSX.Element => {
    console.log(context);
    const { locale } = context.globals;

    i18n.on('languageChanged', (locale) => {
        const direction = i18n.dir(locale);
        document.dir = direction;
    });

    useEffect((): void => {
        void i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};
