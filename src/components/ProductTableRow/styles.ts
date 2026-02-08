import styled from 'styled-components';

export const Row = styled.tr`
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_light};
  }

  td {
    &:last-child {
      div {
        display: flex;
        justify-content: center;
        gap: 8px;
      }
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    strong {
      font: ${({ theme }) => theme.font.openSans.small_600};
      color: ${({ theme }) => theme.colors.gray_100};
    }

    small {
      font: ${({ theme }) => theme.font.openSans.small_400};
      color: ${({ theme }) => theme.colors.gray_200};
      line-height: 1;
    }
  }
`;