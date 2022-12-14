import React from "react";
import Contact from "../../components/Contact";
import Headline from "../../components/Headline";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import About from "./modules/About";
import Clients from "./modules/Clients";
import Experience from "./modules/Experience";
import Projects from "./modules/Projects";
import Skills from "./modules/Skills";
import { Container } from "./styled";

function Home() {
  return (
    <Container>
      <Nav />
      <Headline />
      <Section>
        <About />
      </Section>
      <Section heading="Clients">
        <Clients />
      </Section>
      <Section heading="Skills">
        <Skills />
      </Section>
      <Section heading="Education & Experience">
        <Experience />
      </Section>
      <Section heading="My Latest Projects">
        <Projects />
      </Section>
      <Section heading="Contact">
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;
