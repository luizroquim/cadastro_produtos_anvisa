import styled from "styled-components";

export const Title = styled.div`

width:100%;
height:100%;
display:flex;
flex-direction:column;

background-color:${({theme})=> theme.colors.gray_500};
gap:4px;

h1{
  font:${({theme})=> theme.font.openSans.x_big_700 };
  color:${({theme})=> theme.colors.gray_100}
  
}

p{
  font:${({theme})=> theme.font.openSans.small_600};
  color:${({theme})=> theme.colors.gray_200}
}
`