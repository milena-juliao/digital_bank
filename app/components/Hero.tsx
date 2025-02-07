import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HeroWrapper,
  ColumnStats,
  StatTitle,
  HeroTitle,
  HeroSubtitle,
  Divider,
  StatsWrapper,
  StatCard,
  StatValue,
  StatDescription,
} from "./Styled/Hero.styled";
import FormSection from "./FormSection";
import Image from "next/image";

const Hero: React.FC = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [officeCount, setOfficeCount] = useState(0);
  const [revenueCount, setRevenueCount] = useState(0);

  const increaseCounter = (
    count: number,
    target: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < target) {
        current += Math.ceil(target / 50);
        setState(current);
      } else {
        clearInterval(interval);
        setState(target);
      }
    }, 40);
  };

  useEffect(() => {
    increaseCounter(projectCount, 120, setProjectCount);
    increaseCounter(officeCount, 12, setOfficeCount);
    increaseCounter(revenueCount, 15, setRevenueCount);
  }, []);

  return (
    <HeroWrapper>
      <ColumnStats>
        <StatTitle>
          <div>
            <Image
              src={"/icons/star.svg"}
              alt={"Estrela"}
              width={10}
              height={10}
            />
            Tecnologia disruptiva
          </div>
        </StatTitle>
        <HeroTitle>Conta digital que não é só uma conta digital</HeroTitle>
        <HeroSubtitle>
          Pellentesque rutrum turpis non est turpis pretium morbi urna.
        </HeroSubtitle>
        <Divider />
        <StatsWrapper>
          <StatCard>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <StatValue>{projectCount}</StatValue>
              <StatDescription>Projetos realizados 2021</StatDescription>
            </motion.div>
          </StatCard>
          <StatCard>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <StatValue>{officeCount}</StatValue>
              <StatDescription>Escritórios no Brasil</StatDescription>
            </motion.div>
          </StatCard>
          <StatCard>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <StatValue>{revenueCount.toLocaleString("pt-BR")} mi</StatValue>
              <StatDescription>Faturamento 2021</StatDescription>
            </motion.div>
          </StatCard>
        </StatsWrapper>
      </ColumnStats>

      <FormSection />
    </HeroWrapper>
  );
};

export default Hero;
