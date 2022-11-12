import React from "react";
import { portfolioData } from "../../../../data";
import { Container, Percentage, Pill } from "./styled";

function Skills() {
  return (
    <Container>
      {portfolioData.skills.map((skill) => (
        <div key={skill.id}>
          <Pill>
            <img src={skill.image} alt={skill.title} />
            <Percentage>{skill.percentage}</Percentage>
          </Pill>
          <p>{skill.title}</p>
        </div>
      ))}
    </Container>
  );
}

export default Skills;
