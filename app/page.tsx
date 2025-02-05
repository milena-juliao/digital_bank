"use client"
import { ReactNode } from "react";
import { NextPage } from 'next';
import ThemeWrapper from './components/ThemeWrapper';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Beneficios from "./components/Beneficios";
import Blog from "./components/Blog";
import Vantagens from "./components/Vantagens";
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

const Page: NextPage = () => {

    return (
        <ThemeWrapper>
            <main>
                <Hero />
                <Solutions />
                <Beneficios />
                <Blog />
                <Vantagens/>
                {/*<FAQ />
        <Footer /> */}
            </main>
        </ThemeWrapper>
    );
};

export default Page;
