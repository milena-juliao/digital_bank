import React, { useState } from 'react';
import { 
    VantagensContainer, 
    Section, 
    VantagensHeader, 
    Description, 
    ImageWrapper, 
    Images, 
    CardDescription, 
    TitleCard, 
    BarEffect 
} from './Styled/Vantagens.styled';
import Image from "next/image";
import ButtonPrimary from './ButtonPrimary';

const Vantagens: React.FC = () => {

    const [barActive, setBarActive] = useState(false);

    return (
        <VantagensContainer>
            <Section>
                <VantagensHeader>
                    03 vantagens exclusivas da SmartMoney
                </VantagensHeader>

                <CardDescription>
                    <TitleCard color="#1E1C2D">Tecnologia de ponta</TitleCard>

                    <Description color="#353345">
                        Nullam neque, rutrum et enim diam, ligula fringilla aliquet tincidunt ullamcorper elit
                    </Description>
                    
                    {/* Barra animada */}
                    <BarEffect 
                        onClick={() => setBarActive(!barActive)} 
                        className={barActive ? "active" : ""}
                    >
                        <div></div>
                    </BarEffect>
                </CardDescription>

                <div className='topicos'>
                    <TitleCard color="#CBD6E2">Tecnologia de ponta</TitleCard>
                    <Description color="#CBD6E2">
                        Posuere sollicitudin semper in posuere habitant. Quis luctus et egestas viverra pellentesque.
                    </Description>
                </div>
                <div className='topicos'>
                    <TitleCard color="#CBD6E2">Suporte especializado</TitleCard>
                    <Description color="#CBD6E2">
                        Posuere sollicitudin semper in posuere habitant. Quis luctus et egestas viverra pellentesque.
                    </Description>
                </div>
            </Section>

            <ImageWrapper>
                <ButtonPrimary href="/" variant={"primary"} />
                <Images>
                    <div>
                        <Image
                            src={"/images/section_vantagens_woman.png"}
                            alt={"Mulher usando celular"}
                            width={282}
                            height={402}
                            layout="responsive"
                        />

                        <Image
                            src={"/icons/arrowLeft.png"}
                            alt={"Ícone de seta"}
                            width={149}
                            height={55}
                            layout="intrinsic"
                        />
                    </div>
                    <div>
                        <Image
                            src={"/icons/arrowRight.png"}
                            alt={"Ícone de seta"}
                            width={149}
                            height={55}
                            layout="intrinsic"
                        />
                        <Image
                            src={"/images/section_vantagens_etapas.png"}
                            alt={"Etapas"}
                            width={290}
                            height={450}
                            layout="responsive"
                        />
                    </div>
                </Images>
            </ImageWrapper>
        </VantagensContainer>
    );
};

export default Vantagens;