import styled from "styled-components";

interface FieldSetFormProps {
  error?: string;
}

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FieldSetForm = styled.fieldset<FieldSetFormProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  font: ${({ theme }) => theme.font.openSans.small_600};
  color: ${({ theme, error }) =>
    error ? theme.colors.semantic_error : theme.colors.gray_800};
  padding: 8px 14px;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.semantic_error : theme.colors.gray_300};
  &:focus-within {
    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.semantic_error : theme.colors.green_200};
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
