import React from "react";
import SocialMedia from "../SocialMedia";
import { Container, Logo } from "./styled";

function Nav() {
  return (
    <Container>
      <Logo
        src="https://imrancodes.com/wp-content/uploads/2022/01/Mascot-Logo-Design-Text-2.png"
        alt="Imran Codes Logo"
      />
      <SocialMedia />
    </Container>
  );
}

export default Nav;
