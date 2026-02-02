import styled from "styled-components";


export const ContentDash = styled.div`
display:flex;
flex-direction:column;
 background-color: ${({ theme }) => theme.colors.gray_400};
 width:100%;
 max-width:90%;
 height:auto;

 
 
 padding:32px;
 gap:20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  

  h1 {
    font: ${({ theme }) => theme.font.openSans.x_big_700};
    color: ${({ theme }) => theme.colors.gray_100};
  }

  p {
    font: ${({ theme }) => theme.font.openSans.small_600};
    color: ${({ theme }) => theme.colors.gray_200};
  }
`;

export const Actions = styled.div`
  
  
  display: flex;
  align-items:center;
  gap: 8px;

  

`;

export const ToolBar = styled.div`
background-color:${({theme})=> theme.colors.gray_600};

`
export const TableContainer = styled.div`
background-color:${({theme})=> theme.colors.gray_600};

`



