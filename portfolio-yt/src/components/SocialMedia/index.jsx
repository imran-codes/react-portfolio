import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Container } from "./styled";

function SocialMedia() {
  return (
    <Container>
      <a href="https://en-gb.facebook.com/" target="_blank">
        <FacebookOutlinedIcon />
      </a>
      <a href="https://github.com/imran-codes" target="_blank">
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/imran-hussain-web-developer/"
        target="_blank"
      >
        <LinkedInIcon />{" "}
      </a>
      <a href="https://www.instagram.com/imran_codes" target="_blank">
        <InstagramIcon />{" "}
      </a>
    </Container>
  );
}

export default SocialMedia;
