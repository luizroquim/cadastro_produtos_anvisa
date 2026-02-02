import { Container } from "../NewProduct/styles";
import { Button } from "../../components/Reuse/Button";
import { Plus,Download } from "lucide-react";

import {
  Header,
  TitleGroup,
  Actions,
  ContentDash,
  ToolBar,
  TableContainer,
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
              <Download size={18} strokeWidth={2.5}/>
              Exportar lista
            
            </Button>
            <Button >
              <Plus size={18} strokeWidth={2.5}/>
              Cadastrar novo produto
            </Button>
            
          </Actions>
        </Header>

        <ToolBar>Filtros</ToolBar>
        <TableContainer>Tabela</TableContainer>
      </ContentDash>
    </Container>
  );
}
