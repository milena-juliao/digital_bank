import React, { useState } from 'react';
import {
    Container,
    Infos,
    Title,
    Description,
    IconTextContainer,
    IconText,
    QuestionsContainer,
    FAQItem,
    Question,
    Answer,
    IconTitle,
    PreTitle,
    PlusIcon
} from './Styled/FAQ.styled';
import Image from 'next/image';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            pergunta: 'Quais recursos ainda posso acessar nas novas Páginas?',
            resposta: 'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
        },
        {
            pergunta: 'Como faço para abrir a minha nova Página?',
            resposta: 'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
        },
        {
            pergunta: 'Há algum conteúdo que não migrará com a minha Página?',
            resposta: 'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
        },
        {
            pergunta: 'Como as pessoas encontrarão a minha nova Página?',
            resposta: 'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
        },
        {
            pergunta: 'O que é o Feed? Como faço para configurá-lo?',
            resposta: 'Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.'
        }
    ];

    const iconText = [
        { icon: "/icons/message.svg", title: "Dúvidas?", text: "Envie uma mensagem para nosso time" },
        { icon: "/icons/smart_money.svg", title: "Faça parte", text: "Cadastre-se para transformar sua empresa" },
        { icon: "/icons/whatsapp.svg", title: "Chama no zap", text: "Fale com conosco comercial" },
    ];

    return (
        <Container>
            <Infos>
                <PreTitle>Tire suas dúvidas</PreTitle>
                <Title>Perguntas mais frequentes</Title>
                <Description>Separamos algumas perguntas e respostas que podem te ajudar na sua decisão</Description>
                <div>
                    {iconText.map((opt, index) => (
                        <IconTextContainer key={index}>
                            <Image
                                src={opt.icon}
                                alt={opt.title}
                                width={30}
                                height={30}
                            />
                            <div>
                                <IconTitle>{opt.title}</IconTitle>
                                <IconText>{opt.text}</IconText>
                            </div>
                        </IconTextContainer>
                    ))}
                </div>
            </Infos>
            <QuestionsContainer>
                {faqs.map((faq, index) => (
                    <FAQItem key={index}>
                        <Question onClick={() => toggleFAQ(index)}>
                            <span>0{index + 1}</span>{faq.pergunta}
                            <PlusIcon>{openIndex === index ? '-' : '+'}</PlusIcon>
                        </Question>
                        {openIndex === index && <Answer>{faq.resposta}</Answer>}
                    </FAQItem>
                ))}
            </QuestionsContainer>
        </Container>
    );
};

export default FAQ;
