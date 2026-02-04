import styled, { css } from "styled-components";

type ContainerProps = {
  $buttonColor: "primary" | "outline"|"ghost";
  $variant: "base" | "icon" | "iconSmall";
  $isLoading?: boolean;
};

const variantStyles = {
  base: css`
    height: 48px;
  `,
  icon: css`
    height: 48px;
    width: 48px;
  `,
  iconSmall: css`
    height: 32px;
    width: 32px;
  `,
};

const variantColor = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.green_100};
    
    color: #ffff;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green_200};
    }
  `,
  outline: css`
    background-color: ${({ theme }) => theme.colors.gray_500};
    border: 1px solid ${({ theme }) => theme.colors.gray_300};
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.green_200};
      color:${({theme})=> theme.colors.green_200};
    }
  `,

  ghost:css`
  border:none;
  &:hover{
    color:${({theme})=> theme.colors.green_200};
  }
  `
};

export const ButtonContainer = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.font.openSans.small_600};
  border-radius: 8px;
  gap:8px;
  border: none;
  cursor: pointer;
  white-space:nowrap;
  padding:24px;
  transition: all 0.2s linear;

 
 

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $buttonColor }) => variantColor[$buttonColor]}
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      cursor: progress;
    `}

 
`;
