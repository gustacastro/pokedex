import React, { useRef } from "react";

import { Home } from "../Home";
import { Pokemons } from "../Pokemons";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function LandingPage() {
  return (
    <Container>
      <Header />

      <Home id='home' />
      <Pokemons id='pokemons' />
    </Container>
  );
}
