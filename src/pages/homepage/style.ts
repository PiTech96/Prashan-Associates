import styled from "styled-components";

export const StyledHeroSection = styled.img`
  background: url(${(props) => props.src}) center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

export const StyledContentContainer = styled.div`
  width: 70%;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
  }

  p {
    font-size: 2rem;
    color: white;
    opacity: 0.8;
  }
`;
