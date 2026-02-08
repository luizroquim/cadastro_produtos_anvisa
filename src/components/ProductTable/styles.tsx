import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;

  thead {
    tr {
      background-color: ${({ theme }) => theme.colors.gray_500};
    }
  }

  tbody {
    tr {
      background-color: ${({ theme }) => theme.colors.background};

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray_light};
      }
    }
  }

  th {
    padding: 16px;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.gray_500};
    font: ${({ theme }) => theme.font.openSans.small_600};
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_300};
    color: ${({ theme }) => theme.colors.gray_100};

    &:last-child {
      text-align: center;
      width: 100px;
    }
  }

  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_300};
    font: ${({ theme }) => theme.font.openSans.small_600};
    color: ${({ theme }) => theme.colors.gray_200};

    &:last-child {
      text-align: center;
      padding: 8px 16px;
    }
  }
`;

export const HeaderRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.gray_500};
`;
