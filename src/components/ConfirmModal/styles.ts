import styled from "styled-components";

export const ConteinerConfirmModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 32px;
  border-radius: 8px;
  gap: 16px;
`;

export const TitleContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
`;
