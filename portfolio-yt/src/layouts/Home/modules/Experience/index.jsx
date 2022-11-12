import React from "react";
import { portfolioData } from "../../../../data";
import JobDescription from "./JobDescription";
import { Column, Container, Title } from "./styled";

function Experience() {
  return (
    <Container>
      <Column>
        <Title>2021 - Present </Title>
        {portfolioData.jobDescriptions
          .filter((item) => item.year === 2022 || item.year === 2021)
          .map((job) => (
            <JobDescription
              title={job.title}
              company={job.company}
              key={job.id}
            />
          ))}
      </Column>
      <Column>
        <Title>2016 - 2020 </Title>
        {portfolioData.jobDescriptions
          .filter(
            (item) =>
              item.year === 2020 || item.year === 2019 || item.year === 2016
          )
          .map((job) => (
            <JobDescription
              title={job.title}
              company={job.company}
              key={job.id}
            />
          ))}
      </Column>
      <Column>
        <Title>2012 - 2014</Title>
        {portfolioData.jobDescriptions
          .filter((item) => item.year === 2014 || item.year === 2012)
          .map((job) => (
            <JobDescription
              title={job.title}
              company={job.company}
              key={job.id}
            />
          ))}
      </Column>
    </Container>
  );
}

export default Experience;
