import React from "react";

import {
  Container,
  BackgroundYellowLeft,
  BackgroundYellowRight,
  PokemonName,
  PokemonNumber,
} from "./styles";

interface PokemonProps {
  name: string;
  id: number;
  img: string;
  onClick: () => void;
  type: any;
}

export function PokemonBox({ name, id, img, onClick, type }: PokemonProps) {
  return (
    <Container onClick={onClick}>
      <BackgroundYellowLeft className='hover' />
      <BackgroundYellowRight className='hover' />

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${img}.png`}
        alt={name}
      />
      <PokemonName>{name}</PokemonName>
      <PokemonNumber>Nº {id}</PokemonNumber>
      <div className='divTypes'>
        {type.map((res: any, index: number) => {
          return (
            <span className={`span ${res.type.name}`} key={index}>
              {res.type.name}
            </span>
          );
        })}
      </div>
    </Container>
  );
}
