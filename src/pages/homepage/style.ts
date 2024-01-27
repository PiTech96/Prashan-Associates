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


interface StyledBtnProps {
  active: boolean ;
}


export const StyledDiv = styled.button<StyledBtnProps>`
  padding: 10px 20px;
  // border-radius: 8px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "2px solid #EB1C24" : "#fff")};
  opacity: ${(props) => (props.active ? "1" : ".7")};
  color: ${(props) => (props.active ? "#22092C" : "#555")};
`;



export const StyledCard = styled('div')`
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
gap: 10px; 
font-size: 16px;
padding: 20px; 
border-radius: 8px;
background: var(--Background, #F8F8F8);
box-shadow: -4px -4px 20px 0px rgba(34,9,44, 0.05);
`;