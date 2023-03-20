import styled from "styled-components";

import BackgroundImg from "../../assets/backgroundimg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;

  align-items: center;
  justify-content: center;

  :before {
    content: "";
    background: url(${BackgroundImg});
    background-position: 1rem;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: -20px;
    opacity: 0.2;
    z-index: -1;
  }

  img {
    width: 35rem;
  }
`;
