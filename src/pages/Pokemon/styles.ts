import styled from "styled-components";

interface StatusBarWidthProps {
  widthBar: string;
}

export const Container = styled.div`
  display: flex;

  margin: 0 auto;
  max-width: 1055px;
  padding: 2rem;
  min-height: 100vh;

  flex-direction: column;

  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;

  top: 2rem;
  right: 0;

  background: transparent;
  border: none;

  transition: all 0.2s ease;

  :hover {
    filter: brightness(0.8);
  }

  svg {
    color: var(--white);
    font-size: 3rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;

  width: 100%;
  span {
    font-size: 1.5rem;
    color: var(--yellow);
    margin-left: 2rem;
  }

  text-align: center;
`;

export const TopContent = styled.div`
  display: flex;
  height: 30rem;
  margin-top: 5rem;

  gap: 2rem;
`;

export const TopLeftContent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;

  background: var(--secondary-background);

  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 20px 0px rgba(1, 1, 1, 0.3);

  img {
    width: 25rem;
    height: 25rem;
  }
`;

export const TopRightContent = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
  }
`;

export const Type = styled.div`
  div {
    margin-top: 1rem;

    span {
      font-size: 1.1rem;
      color: var(--white);
      padding: 0.1rem 2rem;
      border-radius: 0.3rem;
      font-weight: 700;
      margin-right: 1rem;

      box-shadow: 0px 0px 10px 0px rgba(1, 1, 1, 1);

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
  }
`;

export const HeightWeight = styled.div`
  margin-top: 1rem;

  h3 {
    font-weight: 300;
  }

  span {
    font-size: 1.5rem;

    &.yellow {
      margin-left: 0.5rem;
      color: var(--yellow);
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 2rem;

  box-shadow: 0px 10px 15px 0px rgba(1, 1, 1, 0.3);
  padding: 1rem;

  flex: 1;

  h3 {
    margin: 1rem 0;
    font-weight: 300;

    span {
      color: var(--yellow);
      font-size: 1.1rem;
    }
  }
`;

export const BarContainer = styled.div`
  display: flex;

  span {
    width: 2.2rem;

    text-align: center;
  }
`;

export const Bar = styled.div`
  flex: 1;

  position: relative;
`;

export const BarBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  border: 1px solid var(--yellow);
  border-radius: 1rem;

  display: flex;
  padding: 0.2rem;
`;

export const BarCompleated = styled.div<StatusBarWidthProps>`
  width: ${({ widthBar }) => `${widthBar}%`};

  background: linear-gradient(170deg, var(--yellow) 0%, var(--white) 100%);
  border-radius: 1rem;
`;
