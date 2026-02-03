import { Container } from "../NewProduct/styles";
import { Button} from "../../components/Reuse/Button";
import { Plus, Download,Search,FunnelIcon,SlidersHorizontalIcon,Shield,ArrowUpDownIcon } from "lucide-react";

import {
  Header,
  TitleGroup,
  Actions,
  ContentDash,
  ToolBar,
  ToolBarLeft,
  ToolBarRight,
  TableContainer,
  SearchWrapper,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <ContentDash>
        <Header>
          <TitleGroup>
            <h1>Produtos</h1>
            <span>Visualize, filtre e gerencie os produtos cadastrados</span>
          </TitleGroup>
          <Actions>
            <Button buttonColor="outline">
              <Download size={18} strokeWidth={2.5} />
              Exportar lista
            </Button>
            <Button>
              <Plus size={18} strokeWidth={2.5} />
              Cadastrar novo produto
            </Button>
          </Actions>
        </Header>

        <ToolBar>
          <ToolBarLeft>
            <SearchWrapper>
              
              <Search size={18} strokeWidth={2.5} color="#9b9f9e"/>
              <input type="text" placeholder="Buscar por nome, registro ou classe..." />
              
            </SearchWrapper>
            <Button buttonColor="outline"><FunnelIcon size={18} strokeWidth={2.5} />Filtros</Button>
            <Button buttonColor="outline"><SlidersHorizontalIcon size={18} strokeWidth={2.5}/>Status</Button>
            <Button buttonColor="outline"><Shield size={18} strokeWidth={2.5}/>Classe de Risco</Button>
            
          </ToolBarLeft>

          <ToolBarRight>

            <Button buttonColor="outline"><ArrowUpDownIcon size={18} strokeWidth={2.5}/>Ordenar</Button>
          </ToolBarRight>
        </ToolBar>
        <TableContainer>Tabela</TableContainer>
      </ContentDash>
    </Container>
  );
}
