import { useCallback, useState } from "react";
import type { Product } from "../../hooks/useProducts";


//Ícones
import { Plus, Download, Search, ArrowUpDownIcon } from "lucide-react";

//Estilos
import {
  Container,
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

//Componentes
import { Button } from "../../components/Reuse/Button";
import { NewProduct } from "../NewProduct";
import { ProductTable } from "../../components/ProductTable";


//Hooks
import { useProducts } from "../../hooks/useProducts";
import { useProductsFilters } from "../../hooks/useProductsFilters";
import { useModal } from "../../hooks/useModal";
import { ConfirmModal } from "../../components/ConfirmModal";

export function Dashboard() {
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [productToToggle, setProductToToggle] = useState<Product | null>(null);
  useState<Product | null>(null);

  const {
    products,
    deleteProduct,
    addProduct,
    updateProduct,
    toggleProductActivation,
  } = useProducts();
  const { searchTerm, setSearchTerm, filteredProducts } =
    useProductsFilters(products);

  const newProductModal = useModal();
  const deleteModal = useModal();
  const toggleActivationModal = useModal();

  //Funções

  const handleRequestDelete = useCallback(
    (product: Product) => {
      setProductToDelete(product);
      deleteModal.open();
    },
    [deleteModal],
  );

  const handleConfirmDelete = useCallback(() => {
    if (productToDelete) {
      deleteProduct(productToDelete.id);
      setProductToDelete(null);
      deleteModal.close();
    }
  }, [productToDelete, deleteProduct, deleteModal]);

  const handleRequestToggleActivation = useCallback(
    (product: Product) => {
      setProductToToggle(product);
      toggleActivationModal.open();
    },
    [toggleActivationModal],
  );

  const handleConfirmToggleActivation = useCallback(() => {
    if (productToToggle) {
      toggleProductActivation(productToToggle.id);
      setProductToToggle(null);
      toggleActivationModal.close();
    }
  }, [productToToggle, toggleProductActivation, toggleActivationModal]);

  const handleOpenNewProductModal = useCallback(() => {
    setEditingProductId(null);
    newProductModal.open();
  }, [newProductModal]);

  const handleSaveProduct = useCallback(
    (productData: Omit<Product, "id">) => {
      if (editingProductId) {
        updateProduct(editingProductId, productData);
      } else {
        addProduct(productData);
      }
      setEditingProductId(null);
      newProductModal.close();
    },
    [editingProductId, updateProduct, addProduct, newProductModal],
  );

  const handleEditProduct = useCallback(
    (id: string) => {
      setEditingProductId(id);
      newProductModal.open();
    },
    [newProductModal],
  );

  const editingProduct = editingProductId
    ? products.find((product) => product.id === editingProductId)
    : undefined;

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
            <Button onClick={handleOpenNewProductModal}>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
          <ProductTable 
          products={filteredProducts}
          searchTerm={searchTerm}
          onEdit={handleEditProduct}
          onDelete={handleRequestDelete}
          onDeactivate={handleRequestToggleActivation}
          />
        </TableContainer>
      </ContentDash>

      {deleteModal.isOpen && (
        <ConfirmModal
          title={`Excluir ${productToDelete?.productName}`}
          message="Você tem certeza? Esta ação removerá o registro permanentemente."
          onClose={deleteModal.close}
          onConfirm={handleConfirmDelete}
        />
      )}

      {toggleActivationModal.isOpen && (
        <ConfirmModal
          title={
            productToToggle?.isActive
              ? `Desativar ${productToToggle?.productName}`
              : `Reativar ${productToToggle?.productName}`
          }
          message={
            productToToggle?.isActive
              ? "O produto será marcado como inativo e ficará visualmente diferente na lista."
              : "O produto voltará ao estado ativo normal."
          }
          onClose={toggleActivationModal.close}
          onConfirm={handleConfirmToggleActivation}
        />
      )}

      {newProductModal.isOpen && (
        <NewProduct
          onClose={newProductModal.close}
          onSave={handleSaveProduct}
          initialData={editingProduct}
        />
      )}
    </Container>
  );
}
