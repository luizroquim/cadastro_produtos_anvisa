import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  width: 100vw;
  min-height: 100vh;

  padding: 20px;
`;
export const ContentDash = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 80%;
  border-radius: 8px;
  height: auto;

  padding: 32px;
  gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
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
  align-items: center;
  gap: 8px;
`;

export const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

export const ToolBarLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 16px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  flex: 1;
  width: 100%;
  max-width: 450px;
  height: 42px;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.gray_300};

  input {
    height: 100%;
    flex: 1;
    border: none;
    outline: none;
    font: ${({ theme }) => theme.font.openSans.regular_400};
    color: ${({ theme }) => theme.colors.gray_100};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_200};
    }

   
  }
`;

export const ToolBarRight = styled.div``;

export const TableContainer = styled.div`

  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  
  background-color: ${({ theme }) => theme.colors.background};
 
`;
