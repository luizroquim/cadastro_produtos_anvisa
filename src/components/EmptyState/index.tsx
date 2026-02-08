import { ContainerEmpty, ContainsEmpty } from "./styles";
import NotSearch from "./../../assets/notSearch.png";

interface EmptyStateProps {
  hasSearchTerm: boolean;
}

export function EmptyState({ hasSearchTerm }: EmptyStateProps) {
  return (
    <ContainerEmpty>
      {hasSearchTerm ? (
        <>
          <img src={NotSearch} alt="Nenhum produto encontrado" />
          <ContainsEmpty>
            <strong>Nenhum produto encontrado.</strong>
            <small>Tente buscar por outro termo.</small>
          </ContainsEmpty>
        </>
      ) : (
        <>
          <img src={NotSearch} alt="Nenhum produto cadastrado" />
          <ContainsEmpty>
            <strong>Nenhum produto cadastrado.</strong>
            <small>Clique em "Cadastrar novo produto para começar".</small>
          </ContainsEmpty>
        </>
      )}
    </ContainerEmpty>
  );
}
