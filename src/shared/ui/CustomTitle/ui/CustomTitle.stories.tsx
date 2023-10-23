import { type Meta, type StoryObj } from '@storybook/react';

import { CustomTitle, TitleLevel, TitleTheme } from './CustomTitle';

const meta: Meta<typeof CustomTitle> = {
    title: 'shared/CustomTitle',
    component: CustomTitle,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomTitle>;

export const TitleOne: StoryObj = {
    args: {
        level: TitleLevel.ONE,
        children: 1,
    },
};

export const TitleTwo: StoryObj = {
    args: {
        level: TitleLevel.TWO,
        children: 2,
    },
};

export const TitleThree: StoryObj = {
    args: {
        level: TitleLevel.THREE,
        children: 3,
    },
};

export const TitlePrimaryTheme: StoryObj = {
    args: {
        level: TitleLevel.THREE,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae ea fuga odio optio nihil expedita, debitis impedit quasi illo fugiat ratione maxime, ut eaque sit, fugit facere soluta tenetur.',
        theme: TitleTheme.PRIMARY,
    },
};
