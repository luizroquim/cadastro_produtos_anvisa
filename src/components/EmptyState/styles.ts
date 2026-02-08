import styled from "styled-components";

export const ContainerEmpty = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;

 
  gap: 2px;
   & img {
    width: 300px;
    padding: 0px;
  }
`;
export const ContainsEmpty = styled.div`

display:flex;
flex-direction:column;
align-items:center;
gap:8px;



  & strong {
    font: ${({ theme }) => theme.font.openSans.small_600};
    color:${({theme})=> theme.colors.green_200}
  }

  & small {
    font: ${({ theme }) => theme.font.openSans.x_small_400};
  }

 
`;
