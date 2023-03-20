import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";

import { PokemonBox } from "../../components/PokemonBox";

import {
  Container,
  Title,
  PokemonsContainer,
  Button,
  Search,
  SurpriseButton,
} from "./styles";

import axios from "axios";

export function Pokemons({ ...rest }) {
  const [totalShow, setTotalShow] = useState(8);
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);

  function HandleSurpriseButton() {
    const randomNumber = Math.floor(Math.random() * 1008) + 1;

    navigate("/pokemon", { state: data[randomNumber].data });
  }

  function getPokemons() {
    const endpoints = [] as any;
    for (let i = 1; i <= 1008; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    axios
      .all(endpoints.map((endpoint: any) => axios.get(endpoint)))
      .then((res) => setData(res));
  }

  useEffect(() => {
    const filteredData = [];

    for (let i in data) {
      if (data[i].data.name.includes(inputText)) {
        filteredData.push(data[i]);
      }
    }

    setFilteredData(filteredData);
  }, [inputText]);

  return (
    <Container {...rest}>
      <Title>Pokémons</Title>
      <SurpriseButton
        onClick={() => HandleSurpriseButton()}
        disabled={!data[0]}
      >
        {!!data[0] ? "Surpreenda-me" : "Carregando..."}
      </SurpriseButton>

      <Search>
        <input
          type='text'
          placeholder='Procurar pokémon'
          onChange={(event) => setInputText(event.target.value)}
        />

        <BiSearchAlt />
      </Search>

      {!!data[0] ? (
        <PokemonsContainer>
          <>
            {inputText === "" ? (
              <>
                {data.map(
                  (res, index) =>
                    index < totalShow && (
                      <PokemonBox
                        key={res.data.id}
                        name={res.data.name}
                        img={res.data.id}
                        id={res.data.id}
                        onClick={() =>
                          navigate("/pokemon", { state: res.data })
                        }
                        type={res.data.types}
                      />
                    )
                )}
              </>
            ) : (
              <>
                {filteredData.map(
                  (res, index) =>
                    index < totalShow && (
                      <PokemonBox
                        id={res.data.id}
                        key={res.data.id}
                        name={res.data.name}
                        img={res.data.id}
                        onClick={() =>
                          navigate("/pokemon", { state: res.data })
                        }
                        type={res.data.types}
                      />
                    )
                )}
              </>
            )}
          </>
        </PokemonsContainer>
      ) : (
        <div className='div'>
          <span>Carregando...</span>
        </div>
      )}
      {totalShow <= 1010 && (
        <Button onClick={() => setTotalShow(totalShow + 8)} disabled={!data[0]}>
          {!!data[0] ? "Carregar mais" : "Carregando..."}
        </Button>
      )}
    </Container>
  );
}
