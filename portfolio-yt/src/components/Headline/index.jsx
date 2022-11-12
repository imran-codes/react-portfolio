import React from "react";
import { portfolioData } from "../../data";
import { Container } from "./styled";

function Headline() {
  return (
    <Container>
      <p>
        {portfolioData.name} - {portfolioData.jobTitle} - Based in the{" "}
        {portfolioData.country}
      </p>
    </Container>
  );
}

export default Headline;
