"use client";
import { NextPage } from "next";
import ThemeWrapper from "./components/ThemeWrapper";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Beneficios from "./components/Beneficios";
import Blog from "./components/Blog";
import Vantagens from "./components/Vantagens";
import BannersText from "./components/BannersText";
import FAQ from "./components/FAQ";

const Page: NextPage = () => {
  return (
    <ThemeWrapper>
      <main>
        <Hero />
        <Solutions />
        <Beneficios />
        <Blog />
        <Vantagens />
        <BannersText />
        <FAQ />
      </main>
    </ThemeWrapper>
  );
};

export default Page;
