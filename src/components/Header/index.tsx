import React from "react";
import { Link } from "react-scroll";

import { Container, Left, Center, Right } from "./styles";

import { HiHome } from "react-icons/hi";

export function Header() {
  return (
    <Container>
      <Left />
      <Center>
        <nav>
          <ul>
            <li>
              <Link activeClass='active' smooth spy to='home'>
                <HiHome />
              </Link>
            </li>
            <li>
              <Link activeClass='active' smooth spy to='pokemons'>
                Pokémons
              </Link>
            </li>
          </ul>
        </nav>
      </Center>
      <Right />
    </Container>
  );
}
