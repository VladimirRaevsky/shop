import { useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entites/Counter';
import { CustomButton } from 'shared/ui/CustomButton';
import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';

import {
    CustomParagraph,
    CustomParagraphTheme,
} from 'shared/ui/CustomParagraph/ui/CustomParagraph';
import { Ripple } from 'shared/ui/Ripple';

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

    console.log(CSSStyleSheet.prototype);
    // useEffect(() => {
    //     try {
    //         void fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    //             .then(async (response) => {
    //                 return await response.json();
    //             })
    //             .then((data) => {
    //                 setTest(data);
    //             });
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, []);

    return (
        <div className={cls.MainPage}>
            <CustomParagraph theme={CustomParagraphTheme.M}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique error nemo labore odit ducimus repellat dignissimos
                reiciendis itaque odio porro dolores voluptate autem qui optio
                nihil a, sint nesciunt totam.
            </CustomParagraph>

            <CustomParagraph theme={CustomParagraphTheme.L}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique error nemo labore odit ducimus repellat dignissimos
                reiciendis itaque odio porro dolores voluptate autem qui optio
                nihil a, sint nesciunt totam.
            </CustomParagraph>

            <CustomParagraph theme={CustomParagraphTheme.XL}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique error nemo labore odit ducimus repellat dignissimos
                reiciendis itaque odio porro dolores voluptate autem qui optio
                nihil a, sint nesciunt totam.
            </CustomParagraph>
            <CustomButton type={ButtonType.BUTTON} theme={ButtonTheme.PRIMARY}>
                купить
                <Ripple duration={3000} color='red' />
            </CustomButton>

            <CustomButton
                type={ButtonType.BUTTON}
                theme={ButtonTheme.SECONDARY}
            >
                Proceed
                <Ripple duration={3000} color='blue' />
            </CustomButton>

            <div className={cls.box}>
                <CustomButton
                    type={ButtonType.BUTTON}
                    theme={ButtonTheme.SQARE}
                >
                    -
                    <Ripple duration={4000} />
                </CustomButton>
                <CustomButton
                    type={ButtonType.BUTTON}
                    theme={ButtonTheme.SQARE}
                >
                    1
                    <Ripple duration={4000} />
                </CustomButton>
                <CustomButton
                    type={ButtonType.BUTTON}
                    theme={ButtonTheme.SQARE}
                >
                    +
                    <Ripple duration={4000} />
                </CustomButton>
            </div>

            {t('Главная страница')}
            <Counter />

            {/* <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
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
            </ul> */}
        </div>
    );
};

export default MainPage;
