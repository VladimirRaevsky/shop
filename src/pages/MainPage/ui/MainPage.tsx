import { useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entites/Counter';
import { CardProduct } from 'shared/ui/CardProduct';
import { CustomButton } from 'shared/ui/CustomButton';
import { ButtonTheme } from 'shared/ui/CustomButton/ui/CustomButton';
import { CustomInput } from 'shared/ui/CustomInput';
import {
    InputPlaceholder,
    InputSize,
    InputTheme,
    InputType,
} from 'shared/ui/CustomInput/ui/CustomInput';
import { InputForm } from 'shared/ui/InputForm';
import { InputFormSize } from 'shared/ui/InputForm/ui/InputForm';
import { PageLoader } from 'widgets/ui/PageLoader';

import cls from './MainPage.module.scss';

interface MainePageProps {
    className?: string;
}

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const MainPage: FC<MainePageProps> = () => {
    const { t } = useTranslation('home');
    const [test, setTest] = useState<Photo[]>();

    useEffect(() => {
        try {
            void fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then(async (response) => {
                    return await response.json();
                })
                .then((data) => {
                    setTest(data);
                });
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <div className={cls.MainPage}>
            <InputForm
                size={InputFormSize.M}
                desc='example'
                type={InputType.TEXT}
            />

            <CustomInput
                type={InputType.TEXT}
                size={InputSize.L}
                theme={InputTheme.SEARCH}
                placeholder={InputPlaceholder.SEARCH}
            />
            <CustomButton theme={ButtonTheme.PRIMARY}>купить</CustomButton>

            <CustomButton theme={ButtonTheme.SECONDARY}>Proceed</CustomButton>

            {t('Главная страница')}
            <Counter />

            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                {test != null ? (
                    test.map((el: Photo) => {
                        const cardInfo = {
                            title: el.title,
                            url: el.url,
                            id: el.id,
                        };
                        return <CardProduct key={el.id} {...cardInfo} />;
                    })
                ) : (
                    <PageLoader />
                )}
            </ul>
        </div>
    );
};

export default MainPage;
