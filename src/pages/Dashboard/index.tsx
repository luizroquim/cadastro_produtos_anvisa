import { Container } from "./styles";
import { Button } from "../../components/Reuse/Button";
import {
  Plus,
  Download,
  Search,
  ArrowUpDownIcon,
  SquarePenIcon,
  Trash2Icon,
  CircleX,
} from "lucide-react";
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

import { useState } from "react";
import { NewProduct } from "../NewProduct";

export function Dashboard() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      id: "1",
      productName: "Luva descartável estéril",
      technicalName: "Luvas descartáveis",
      anvisaRegister: "10330660003",
      riskClass: "Classe I - Baixo Risco",
      status: "Vigente",
    },
  ]);

  //Funções

  function handleOpenModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewProductModalOpen(false);
  }

  return (
    <Container>
      <ContentDash>
        <Header>
          <TitleGroup>
            <h1> Gestão de produtos regulamentados</h1>
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
              <Search size={18} strokeWidth={2.5} color="#9b9f9e" />
              <input
                type="text"
                placeholder="Buscar por nome, registro ou classe..."
              />
            </SearchWrapper>
          </ToolBarLeft>

          <ToolBarRight>
            <Button buttonColor="ghost">
              <ArrowUpDownIcon size={18} strokeWidth={2.5} />
              Ordenar
            </Button>
          </ToolBarRight>
        </ToolBar>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome/Nome Técnico</th>
                <th>Registro</th>
                <th>Classe de Risco</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="product-info">
                      <strong>{product.productName}</strong>
                      <small>{product.technicalName}</small>
                    </div>
                  </td>
                  <td>{product.anvisaRegister}</td>
                  <td>{product.riskClass}</td>
                  <td>{product.status}</td>
                  <td>
                    <div>
                      <Button buttonColor="ghost" title="Editar">
                        <SquarePenIcon size={18} strokeWidth={2.5} />
                      </Button>
                      <Button
                        buttonColor="ghost"
                        title="Excluir"
                        onClick={() =>
                          setProducts(
                            products.filter((p) => p.id !== product.id),
                          )
                        }
                      >
                        <Trash2Icon size={18} strokeWidth={2.5} />
                      </Button>
                      <Button buttonColor="ghost" title="Desativar">
                        <CircleX size={18} strokeWidth={2.5} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </ContentDash>
      {isNewProductModalOpen && <NewProduct onClose={handleCloseModal} />}
    </Container>
  );
}
