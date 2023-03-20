import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  max-width: 1024px;
  width: 100%;
  height: 4rem;
  background: red;
  position: fixed;

  top: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);

  z-index: 5;
`;

export const Left = styled.div`
  background: var(--header-background);

  position: absolute;
  height: 100%;
  width: 10rem;
  margin-top: -1.5rem;
  margin-left: -7.5rem;

  transform: rotate(30deg);

  z-index: 0;

  border-radius: 0 0 2rem 0;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Center = styled.div`
  background: var(--header-background);

  z-index: 1;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;

    li {
      list-style: none;

      a {
        display: flex;
        align-items: center;
        margin: 0 1rem;
        padding: 0.2rem;

        font-size: 1.2rem;

        font-weight: 700;

        cursor: pointer;

        transition: all 0.2s ease;

        border-bottom: 2px solid transparent;

        filter: brightness(2);

        :hover {
          color: var(--yellow);
          border-bottom: 2px solid var(--yellow);

          filter: brightness(1);
        }

        &.active {
          color: var(--yellow);
          border-bottom: 2px solid var(--yellow);
        }
      }
    }
  }
`;

export const Right = styled.div`
  background: var(--header-background);

  position: absolute;
  height: 100%;
  width: 10rem;
  right: 0;
  margin-right: -7.5rem;
  margin-top: -1.5rem;

  transform: rotate(-30deg);

  z-index: 0;

  border-radius: 0 0 0 2rem;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
