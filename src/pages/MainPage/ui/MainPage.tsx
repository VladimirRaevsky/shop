import { type FC } from 'react';

import PhoneImg from '../../../shared/assets/icons/phone.png';

import { type MainePageProps } from '../types';

import { Counter } from 'entites/Counter';
import { CardProduct } from 'shared/ui/CardProduct';
import { CustomButton } from 'shared/ui/CustomButton';

import { ButtonTheme, ButtonType } from 'shared/ui/CustomButton/types';
import { CustomInput } from 'shared/ui/CustomInput';
import { InputTheme } from 'shared/ui/CustomInput/types';
import { CustomParagraphTheme } from 'shared/ui/CustomParagraph/types';
import { CustomParagraph } from 'shared/ui/CustomParagraph/ui/CustomParagraph';
import { InputForm } from 'shared/ui/InputForm';
import {
    InputFormTheme,
    InputPlaceholder,
    InputType,
} from 'shared/ui/InputForm/types';
import { Ripple } from 'shared/ui/Ripple';

import cls from './MainPage.module.scss';

const MainPage: FC<MainePageProps> = () => {
    // const [test, setTest] = useState<Photo[]>();

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
                Add to cart
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

            <CustomInput
                theme={InputTheme.SEARCH}
                placeholder={InputPlaceholder.SEARCH}
                type={InputType.TEXT}
            />

            <CustomInput
                theme={InputTheme.SUBSCRIBE}
                placeholder={InputPlaceholder.EMAIL}
                type={InputType.TEXT}
            />
            <Counter />

            <InputForm
                type={InputType.TEXT}
                placeholder={InputPlaceholder.EMAIL}
                theme={InputFormTheme.BIG}
                description='Email address *'
            />

            <CardProduct title='phone' url={PhoneImg} price={1000} />
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
