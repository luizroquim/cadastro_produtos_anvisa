import { styled } from "styled-components";

export const Overlay = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  min-height: 100vh;

  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_500};
  width: 100%;
  max-width: 700px;
  max-height: 95vh; 
  overflow-y: auto; 
  height: auto;
  border-radius: 8px;
  padding: 24px;
  gap: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RowField = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
