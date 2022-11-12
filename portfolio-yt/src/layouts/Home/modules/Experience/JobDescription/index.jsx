import React from "react";
import { Container } from "./styled";

function JobDescription({ title, company }) {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{company}</p>
    </Container>
  );
}

export default JobDescription;
