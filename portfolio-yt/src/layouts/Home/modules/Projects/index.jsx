import React from "react";
import { portfolioData } from "../../../../data";
import { Image } from "./styled";
import { Container, ProjectContainer, Category, Title } from "./styled";

function Projects() {
  return (
    <Container>
      {portfolioData.projects.map((project) => (
        <ProjectContainer>
          <Image src={project.image} alt={project.title} />
          <Category>{project.category}</Category>
          <Title>{project.title}</Title>
        </ProjectContainer>
      ))}
    </Container>
  );
}

export default Projects;
