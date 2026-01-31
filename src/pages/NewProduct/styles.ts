import { styled } from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items:center;
  
  width:100vw;
  min-height:100vh;
  background-color: ${({ theme }) => theme.colors.gray_400  };
  padding:20px;
  
  
`;

export const Content = styled.div`
display:flex;
flex-direction:column;
 background-color: ${({ theme }) => theme.colors.gray_500};
 width:100%;
 max-width:700px;
 height:auto;
 border-radius:8px;
 box-shadow:-15px 0 20px -10px rgba(0, 0, 0, 0.15), 15px 0 20px -10px rgba(0, 0, 0, 0.15);
 padding:32px;
 gap:20px;
 
`;

export const Form = styled.form`
width:100%;
display:flex;
flex-direction:column;
gap:8px;


`
export const FormData = styled.div`
display:flex;
flex-direction:column;
gap:16px;

`

export const RowField = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
gap:16px;

`






