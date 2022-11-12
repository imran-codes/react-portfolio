import React from "react";
import { portfolioData } from "../../../../data";
import JobInfo from "./JobInfo";
import * as Styled from "./styled";

function About() {
  return (
    <Styled.Container>
      <Styled.LeftColumn>
        {portfolioData.jobInfo.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </Styled.LeftColumn>
      <img
        src="https://i0.wp.com/imrancodes.com/wp-content/uploads/2022/01/Mascot-Logo-Design-Transparent-2.png?resize=1024%2C797&ssl=1"
        alt="Imran Codes"
      />
      <Styled.RightColumn>
        {portfolioData.jobStats.map((job) => (
          <JobInfo
            key={job.id}
            title={job.title}
            description={job.description}
          />
        ))}
      </Styled.RightColumn>
    </Styled.Container>
  );
}

export default About;
