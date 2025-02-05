import React from "react";
import { CardContainer, Content, Title, Description, CardItem } from "./Styled/Beneficios.styled";
import Image from "next/image";

const Beneficios: React.FC = () => {
    const cardsOptions = [
        { icon: "/icons/atom.png", title: "Fim da complexidade", description: "Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh auctor lacus eleifend tincidunt sceleris" },
        { icon: "/icons/charge.png", title: "Sem burocracia", description: "Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi, imperdiet sit aliquam viverra." },
        { icon: "/icons/focus.png", title: "Tudo digital", description: "Dictum mi risus auctor donec et amet duis tincidunt gravida. Tellus amet, porttitor quis mauris." },
        { icon: "/icons/chartUp.png", title: "Evolução constante", description: "Commodo egestas dolor, sapien nam posuere at. Ultrices dictum cras vel gravida gravida vehicula " }
    ]

    return (
        <CardContainer>
            {cardsOptions.map((c, index) => (
                <CardItem key={index}>
                    <Image
                        src={c.icon}
                        alt={c.title}
                        width={55}
                        height={55}
                    />
                    <Content>
                        <Title>{c.title}</Title>
                        <Description>{c.description}</Description>
                    </Content>
                </CardItem>
            ))}
        </CardContainer>
    );
};

export default Beneficios;
