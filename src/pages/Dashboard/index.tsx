import { Container } from "./styles";
import { Button} from "../../components/Reuse/Button";
import { Plus, Download,Search,ArrowUpDownIcon } from "lucide-react";
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

import {useState} from "react";
import { NewProduct } from "../NewProduct";

export function Dashboard() {

  const[isNewProductModalOpen,setIsNewProductModalOpen] = useState(false)

  function handleOpenModal(){
    setIsNewProductModalOpen(true);
  }

  function handleCloseModal(){
    setIsNewProductModalOpen(false);
  }
  
  return (
    <Container>
      <ContentDash>
        <Header>
          <TitleGroup>
           
            <h1 >  Gestão de produtos regulamentados</h1>
            <span>Visualize, filtre e gerencie os produtos cadastrados</span>
          </TitleGroup>
          <Actions>
            <Button buttonColor="outline">
              <Download size={18} strokeWidth={2.5} />
              Exportar lista
            </Button>
            <Button onClick={handleOpenModal}>
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
          
            
          </ToolBarLeft>

          <ToolBarRight>

            <Button buttonColor="ghost"><ArrowUpDownIcon size={18} strokeWidth={2.5}/>Ordenar</Button>
          </ToolBarRight>
        </ToolBar>
        <TableContainer>Tabela</TableContainer>
      </ContentDash>
      {isNewProductModalOpen &&(
        <NewProduct onClose={handleCloseModal}/>
      )}
    </Container>
  );
}
