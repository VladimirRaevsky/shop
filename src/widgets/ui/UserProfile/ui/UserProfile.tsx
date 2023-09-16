import { type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './UserProfile.module.scss';

interface UserProfileProps {
    className?: string;
}

export const UserProfile: FC<UserProfileProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.userProfile, {}, [className])}>
            userProfile
        </div>
    );
};
