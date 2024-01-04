import { type FC } from 'react';

import { type TextProps } from '../types';

import { ClassNames } from 'shared/lib';

import { CustomParagraphTheme } from 'shared/ui/CustomParagraph/types';
import { CustomParagraph } from 'shared/ui/CustomParagraph/ui/CustomParagraph';
import { CustomTitle } from 'shared/ui/CustomTitle';
import { TitleLevel, TitleTheme } from 'shared/ui/CustomTitle/types';

/**
 * @param className - Class for controlling a component from outside
 * @param title - Text title
 * @param description - Text description.
 */

export const Text: FC<TextProps> = (props) => {
    const { className = '', title, description, ...other } = props;

    return (
        <div className={ClassNames('', {}, [className])} {...other}>
            {title !== undefined && (
                <CustomTitle
                    level={TitleLevel.THREE}
                    ariaLevel={TitleLevel.THREE}
                    theme={TitleTheme.PRIMARY}
                >
                    {title}
                </CustomTitle>
            )}
            {description !== undefined && (
                <CustomParagraph theme={CustomParagraphTheme.ERROR}>
                    {description}
                </CustomParagraph>
            )}
        </div>
    );
};
