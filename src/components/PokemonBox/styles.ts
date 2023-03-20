import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  flex-direction: column;
  border: 1px solid var(--secondary--text);
  background: var(--secondary-background);
  border-radius: 0.8rem;

  overflow: hidden;

  height: 20rem;
  width: 15rem;

  transition: all 0.2s ease;

  cursor: pointer;

  :hover {
    scale: 1.02;

    .hover {
      filter: brightness(2);
    }
  }

  img {
    padding: 0.1rem;
    background: var(--secondary-background);
    width: 12rem;
    height: 12rem;
    border: 2px solid var(--white);
    border-radius: 100%;
    z-index: 1;
  }

  .divTypes {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .span {
    font-size: 1.1rem;
    color: var(--white);
    padding: 0.1rem 1.2rem;
    border-radius: 0.3rem;
    font-weight: 700;
    margin-top: 0.2rem;

    & + .span {
      margin-left: 0.4rem;
    }

    &.grass {
      background: var(--green);
      color: var(--main-background);
      filter: brightness(1.2);
    }

    &.poison {
      background: var(--purple);
      color: var(--main-background);
    }

    &.bug {
      background: var(--green);
      color: var(--main-background);
      filter: brightness(0.9);
    }

    &.dragon {
      background: var(--red);
      color: var(--main-background);
      filter: brightness(1.7);
    }

    &.fairy {
      background: var(--pink);
      color: var(--main-background);
      filter: brightness(1.6);
    }

    &.fire {
      background: var(--orange);
      color: var(--main-background);
    }

    &.ghost {
      background: var(--purple);
      color: var(--main-background);
      filter: brightness(0.8);
    }

    &.ground {
      background: var(--yellow);
      color: var(--main-background);
      filter: brightness(0.8);
    }

    &.normal {
      color: var(--white);
      background: var(--comment);
      color: var(--main-background);
    }

    &.psychic {
      background: var(--pink);
      color: var(--main-background);
    }

    &.steel {
      background: var(--comment);
      color: var(--main-background);
      filter: brightness(0.7);
    }
    &.electric {
      background: var(--yellow);
      color: var(--main-background);
      filter: brightness(1.2);
    }
    &.fighting {
      background: var(--orange);
      color: var(--main-background);
      filter: brightness(0.7);
    }
    &.flying {
      background: var(--blue);
      color: var(--main-background);
      filter: brightness(0.8);
    }
    &.ice {
      background: var(--blue);
      color: var(--main-background);
      filter: brightness(1);
    }
    &.rock {
      background: var(--yellow);
      color: var(--main-background);
      filter: brightness(0.7);
    }
    &.water {
      background: var(--blue);
      color: var(--main-background);
      filter: brightness(1.4);
    }

    &.dark {
      color: var(--white);
    }
  }
`;

export const BackgroundYellowLeft = styled.div`
  width: 20rem;
  height: 4rem;

  background: var(--white);

  position: absolute;

  z-index: 0;

  transform: rotate(30deg);

  margin-bottom: 60%;
  margin-right: 80%;

  transition: all 0.5s ease;
`;

export const BackgroundYellowRight = styled.div`
  width: 20rem;
  height: 4rem;

  background: var(--white);

  position: absolute;

  z-index: 0;

  transform: rotate(-30deg);

  margin-bottom: 60%;
  margin-left: 80%;

  transition: all 0.5s ease;
`;

export const PokemonName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  margin-top: 1rem;

  text-transform: capitalize;
`;

export const PokemonNumber = styled.div`
  font-weight: 700;
  color: var(--yellow);
`;
