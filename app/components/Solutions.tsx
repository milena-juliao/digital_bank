import React from 'react';
import { Wrapper, Section, SolutionsHeader, Description, Bullet, BulletItem, ImageWrapper, EllipsisDiv } from './Styled/Solutions.styled';
import Image from "next/image";
import { FaEllipsis } from 'react-icons/fa6';
import CardSolutions from './CardSolutions';
import ButtonPrimary from './ButtonPrimary';

const Solutions: React.FC = () => {
    const bulletOptions = [
        "Sagittis sed cursus sed malesuada ultrices",
        "Lectus ac at massa ac tellus fringilla aenean",
        "Cras faucibus tristique volutpat accumsan"
    ]

    return (
        <Wrapper>
            <Section>
                <SolutionsHeader>Conheça nossas soluções customizadas</SolutionsHeader>
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

                <ButtonPrimary href="/" variant={"primary"} />

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
                <EllipsisDiv>
                    <FaEllipsis />
                </EllipsisDiv>
                <Image
                    src={"/images/section_solution_woman.png"}
                    alt={"Mulher usando celular"}
                    className='woman'
                    width={270}
                    height={270}
                />
                <Image
                    src={"/images/section_solution_arrowUp.svg"}
                    alt={"Seta apontando para cima"}
                    className='arrowUp'
                    width={50}
                    height={150}
                />
                <CardSolutions />
            </ImageWrapper>
        </Wrapper>
    );
};

export default Solutions;
