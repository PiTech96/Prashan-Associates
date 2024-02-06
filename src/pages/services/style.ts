import styled from "styled-components";

export const StyledCard = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  padding: 40px;
  margin:20px;
  border-radius: 8px;
  background: var(--Background, #f8f8f8);
  box-shadow: -4px -4px 20px 0px rgba(34, 9, 44, 0.05);
`;
