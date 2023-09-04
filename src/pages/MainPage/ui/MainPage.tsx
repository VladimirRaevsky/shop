import { Counter } from 'entites/Counter';
import { useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MyCard } from 'shared/ui/MyCard';
import { MyInput } from 'shared/ui/MyInput';
import {
    MyInputPlaceholder,
    MyInputSize,
    MyInputTheme,
    MyInputType,
} from 'shared/ui/MyInput/ui/MyInput';
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
            <MyInput
                type={MyInputType.TEXT}
                size={MyInputSize.L}
                theme={MyInputTheme.SEARCH}
                placeholder={MyInputPlaceholder.SEARCH}
            />

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
                        return <MyCard key={el.id} {...cardInfo} />;
                    })
                ) : (
                    <PageLoader />
                )}
            </ul>
        </div>
    );
};

export default MainPage;
