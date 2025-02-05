import React from 'react';
import { VantagensContainer, Section, VantagensHeader, Description, Bullet, BulletItem, ImageWrapper, Images } from './Styled/Vantagens.styled';
import Image from "next/image";
import { FaEllipsis } from 'react-icons/fa6';
import ButtonPrimary from './ButtonPrimary';

const Vantagens: React.FC = () => {
    const bulletOptions = [
        "Sagittis sed cursus sed malesuada ultrices",
        "Lectus ac at massa ac tellus fringilla aenean",
        "Cras faucibus tristique volutpat accumsan"
    ]

    return (
        <VantagensContainer>
            <Section>
                <VantagensHeader>
                03 vantagens exclusivas da SmartMoney
                </VantagensHeader>
                <Description>
                    Suscipit pellentesque praesent auctor molestie massa nunc vitae felis eget est ut gravida in maecenas.
                    Tempus in in in congue proin.
                </Description>

                <div>
                    {bulletOptions.map((b, index) => (
                        <Bullet key={index}>
                            <Image
                                src={"/icons/check.svg"}
                                alt={"ícone de check"}
                                width={24}
                                height={24}
                            />
                            <BulletItem>{b}</BulletItem>
                        </Bullet>
                    ))}
                </div>



                <div>
                    <Image
                        src={"/icons/cellphone.svg"}
                        alt={"ícone de celular"}
                        width={13.33}
                        height={20}
                    />
                    <BulletItem>Fale conosco</BulletItem>
                </div>
            </Section>

            <ImageWrapper>
                <ButtonPrimary />
                <Images>
                    <div>
                        <Image
                            src={"/images/section_vantagens_woman.png"}
                            alt={"Mulher usando celular"}
                            width={282}
                            height={402}
                        />

                        <Image
                            src={"/icons/arrowLeft.png"}
                            alt={"icone de seta apenas para estilização"}
                            width={149}
                            height={55}
                        />
                    </div>
                    <div>
                        <Image
                            src={"/icons/arrowRight.png"}
                            alt={"icone de seta apenas para estilização"}
                            width={149}
                            height={55}
                        />
                        <Image
                            src={"/images/section_vantagens_etapas.png"}
                            alt={"Etapas"}
                            width={290}
                            height={450}
                        />
                    </div>
                </Images>
            </ImageWrapper>
        </VantagensContainer>
    );
};

export default Vantagens;