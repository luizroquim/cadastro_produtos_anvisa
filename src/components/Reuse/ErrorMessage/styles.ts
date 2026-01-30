import styled from "styled-components";

export const FieldErrorMessage = styled.div`
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
