import styled from "styled-components";

interface InputContainerProps {
  error?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  label {
    font: ${({ theme }) => theme.font.openSans.small_400};
  }
  input {
    padding: 12px 14px;

    border-radius: 8px;
    font: ${({ theme }) => theme.font.openSans.small_400};
    color: ${({ theme }) => theme.colors.gray_800};

    border: 1px solid
      ${({ theme, error }) =>
        error ? theme.colors.semantic_error : theme.colors.gray_300};
    &:focus {
      outline: none;
      border: 1px solid
        ${({ theme, error }) =>
          error ? theme.colors.semantic_error : theme.colors.green_200};

      box-shadow: ${({ error }) =>
        error ? "0 0 10px 1px rgba(53, 43, 43, 0.1)" : "none"};
    }
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputError = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    font: ${({ theme }) => theme.font.openSans.xx_small_400};
    color: ${({ theme }) => theme.colors.gray_200};
  }
`;

export const IconError = styled.img`
  width: 16px;
  height: 16px;
`;
