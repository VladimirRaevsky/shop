import { Input, Space } from 'antd';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { type InputProps } from '../types';

import { ClassNames } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';

import { ButtonTheme, ButtonType } from 'shared/ui/CustomButton/types';
import { Ripple } from 'shared/ui/Ripple';

import cls from './CustomInput.module.scss';

const { Search } = Input;

/**
 * @param className - Class for controlling a component from outside.
 * @param theme - Input theme.
 * @param children - React node.
 * @param type - Input type.
 * @param placeholder - Input placeholder.
 * @param status - Input work status.
 */

let isSearch: boolean = false;

export const CustomInput: FC<InputProps> = (props) => {
    const {
        type,
        placeholder,
        className = '',
        theme,
        status,
        ...other
    } = props;

    isSearch = theme === 'search';

    const { t } = useTranslation();

    const handlerOnAnimation = (): void => {};

    const onSearchHandler = (e: any): void => {
        console.log(e.target?.value);
    };

    return isSearch ? (
        <span className={ClassNames(cls.search, {}, [className])}>
            <Search
                rootClassName={ClassNames(cls.input, {}, [])}
                type={type}
                maxLength={30}
                showCount
                placeholder={placeholder}
                allowClear
                status={status}
                onInput={(e: any) => {
                    onSearchHandler(e);
                }}
                // onChange={handlerOnAnimation}
                spellCheck
                {...other}
            />
        </span>
    ) : (
        <span className={ClassNames(cls.subscribe, {}, [className])}>
            <Space.Compact>
                <Input
                    rootClassName={ClassNames(cls.input, {}, [])}
                    type={type}
                    maxLength={30}
                    showCount
                    placeholder={placeholder}
                    allowClear
                    status={status}
                    onInput={(e: any) => {
                        onSearchHandler(e);
                    }}
                    onClick={handlerOnAnimation}
                    spellCheck
                    {...other}
                />
                <CustomButton
                    theme={ButtonTheme.SUBSCRIBE}
                    type={ButtonType.SUBMIT}
                >
                    {t('подписаться')}
                    <Ripple duration={4000} />
                </CustomButton>
            </Space.Compact>
        </span>
    );
};
