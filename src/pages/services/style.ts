import styled from "styled-components";
import { Select } from "antd";

export const StyledCard = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  padding: 40px;
  margin: 20px;
  border-radius: 8px;
  background: var(--Background, #f8f8f8);
  box-shadow: -4px -4px 20px 0px rgba(34, 9, 44, 0.05);
`;

export const StyledSelect = styled(Select)`
  height: 50px;
  display: block;
  width: 100%;
  // padding:4px;
  border: none;
  // background: #fefefe;
  &::placeholder {
    color: #344054; /* Adjust the color to your preference */
    opacity: 1; /* Set the opacity as needed */
  }
`;
export const StyledInput = styled("input")`
  height: 50px;
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background: #fefefe;

  &::placeholder {
    color: #344054; /* Adjust the color to your preference */
    opacity: 1; /* Set the opacity as needed */
  }
`;
