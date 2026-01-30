import styled from "styled-components";

export const Title = styled.div`

width:100%;
height:50px;
display:flex;
flex-direction:column;

background-color:${({theme})=> theme.colors.gray_500};
gap:2px;

h1{
  font:${({theme})=> theme.font.openSans.big_700 };
  color:${({theme})=> theme.colors.gray_100}
  
}

p{
  font:${({theme})=> theme.font.openSans.x_small_400};
  color:${({theme})=> theme.colors.gray_200}
}
`