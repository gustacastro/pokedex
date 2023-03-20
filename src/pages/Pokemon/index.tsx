import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  BackButton,
  Title,
  TopContent,
  TopLeftContent,
  TopRightContent,
  Type,
  HeightWeight,
  StatusContainer,
  BarContainer,
  Bar,
  BarBackground,
  BarCompleated,
} from "./styles";

import { IoIosArrowForward } from "react-icons/io";

export function Pokemon() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <BackButton onClick={() => navigate("/")}>
        <IoIosArrowForward />
      </BackButton>
      <Title>
        {data.name}
        <span>Nº {data.id}</span>
      </Title>
      <TopContent>
        <TopLeftContent>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            alt=''
          />
        </TopLeftContent>
        <TopRightContent>
          <Type>
            <h2>Type</h2>
            <div>
              <span className={data.types[0].type.name}>
                {data.types[0].type.name}
              </span>
              {!!data.types[1] && (
                <span className={data.types[1].type.name}>
                  {data.types[1].type.name}
                </span>
              )}
            </div>
          </Type>

          <HeightWeight>
            <h2>Height</h2>
            <span>{data.height / 10}</span>
            <span className='yellow'>m</span>
          </HeightWeight>

          <HeightWeight>
            <h2>Weight</h2>
            <span>{data.weight / 10}</span>
            <span className='yellow'>kg</span>
          </HeightWeight>

          <HeightWeight>
            <h2>Abilities</h2>

            {data.abilities.map((item: any, index: number) => {
              return <h3 key={index}>{item.ability.name}</h3>;
            })}
          </HeightWeight>
        </TopRightContent>
      </TopContent>

      <StatusContainer>
        <h2>Status</h2>

        <h3>
          Hp <span>{data.stats[0].base_stat}</span>
        </h3>
        <BarContainer>
          <span>1</span>
          <Bar>
            <BarBackground>
              <BarCompleated
                widthBar={((data.stats[0].base_stat / 500) * 100).toString()}
              />
            </BarBackground>
          </Bar>
          <span>500</span>
        </BarContainer>
        <h3>
          Attack <span>{data.stats[1].base_stat}</span>
        </h3>
        <BarContainer>
          <span>1</span>
          <Bar>
            <BarBackground>
              <BarCompleated
                widthBar={((data.stats[1].base_stat / 500) * 100).toString()}
              />
            </BarBackground>
          </Bar>
          <span>500</span>
        </BarContainer>
        <h3>
          Defense <span>{data.stats[2].base_stat}</span>
        </h3>
        <BarContainer>
          <span>1</span>
          <Bar>
            <BarBackground>
              <BarCompleated
                widthBar={((data.stats[2].base_stat / 500) * 100).toString()}
              />
            </BarBackground>
          </Bar>
          <span>500</span>
        </BarContainer>
        <h3>
          Special Attack <span>{data.stats[3].base_stat}</span>
        </h3>
        <BarContainer>
          <span>1</span>
          <Bar>
            <BarBackground>
              <BarCompleated
                widthBar={((data.stats[3].base_stat / 500) * 100).toString()}
              />
            </BarBackground>
          </Bar>
          <span>500</span>
        </BarContainer>
        <h3>
          Special Defense <span>{data.stats[4].base_stat}</span>
        </h3>
        <BarContainer>
          <span>1</span>
          <Bar>
            <BarBackground>
              <BarCompleated
                widthBar={((data.stats[4].base_stat / 500) * 100).toString()}
              />
            </BarBackground>
          </Bar>
          <span>500</span>
        </BarContainer>
        <h3>
          Speed <span>{data.stats[5].base_stat}</span>
        </h3>
        <BarContainer>
          <span>1</span>
          <Bar>
            <BarBackground>
              <BarCompleated
                widthBar={((data.stats[5].base_stat / 500) * 100).toString()}
              />
            </BarBackground>
          </Bar>
          <span>500</span>
        </BarContainer>
      </StatusContainer>
    </Container>
  );
}
