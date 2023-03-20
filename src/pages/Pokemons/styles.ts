import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;

  flex-direction: column;
  padding: 7rem 2rem 2rem 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 7rem;
  height: fit-content;
  width: fit-content;

  border-top: 2px solid var(--yellow);
  border-bottom: 2px solid var(--yellow);

  border-radius: 0.2rem;

  padding: 0 1rem;
`;

export const PokemonsContainer = styled.div`
  display: grid;

  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);

  .div {
    flex: 1;
    background: red;

    span {
      display: flex;
      align-self: center;
    }
  }
`;

export const Button = styled.button`
  margin: 2rem 0;

  background: var(--white);
  padding: 1rem 2rem;

  border: 1px solid transparent;
  font-weight: 700;
  border-radius: 0.3rem;

  transition: all 0.2s ease;

  :hover {
    border-color: var(--white);
    background: transparent;
    color: var(--white);
  }
`;

export const Search = styled.div`
  margin-bottom: 2rem;

  display: flex;

  align-items: center;

  position: relative;
  width: 100%;
  max-width: 1055px;

  svg {
    color: var(--white);
    opacity: 0.5;
    font-size: 1.4rem;

    position: absolute;
    right: 1rem;
  }

  input {
    background: var(--secondary-background);
    font-size: 1.1rem;
    width: 100%;

    color: var(--white);

    padding: 1rem 3rem 1rem 2rem;
    border: 1px solid var(--white);
    border-radius: 0.5rem;

    ::placeholder {
      color: var(--white);

      opacity: 0.5;
    }
  }
`;

export const SurpriseButton = styled.button`
  background: var(--yellow);
  border: 1px solid transparent;
  border-radius: 0.3rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--main-background);

  padding: 1rem 2rem;
  margin-top: -1rem;
  margin-bottom: 1rem;

  transition: all 0.2s ease;

  :hover {
    border: 1px solid var(--yellow);
    color: var(--yellow);
    background: transparent;
  }
`;
