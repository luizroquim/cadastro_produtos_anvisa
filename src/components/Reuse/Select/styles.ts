import styled from "styled-components";

export const FieldSetForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray_300};
  border-radius: 8px;
  font: ${({ theme }) => theme.font.openSans.small_400};
  color: ${({ theme }) => theme.colors.gray_800};
  padding: 8px 14px;
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.green_200};
  }

  
`;

export const SelectForm = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;

  font: inherit;
  color: inherit;
  cursor: pointer;

  &:focus {
    box-shadow: none;
  }
 
`;
