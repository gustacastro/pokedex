import React from "react";

import { Container } from "./styles";

import Logo from "../../assets/logo.png";

export function Home({ ...rest }) {
  return (
    <Container {...rest}>
      <img src={Logo} alt='Logo' />
    </Container>
  );
}
