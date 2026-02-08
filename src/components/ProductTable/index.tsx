import { memo } from "react";
import { ProductTableRow } from "../ProductTableRow";
import { EmptyState } from "../EmptyState";
import { Table, HeaderRow } from "./styles";
import type { Product } from "../../hooks/useProducts";

interface ProductTableProps {
  products: Product[];
  searchTerm: string;
  onEdit: (id: string) => void;
  onDelete: (product: Product) => void;
  onDeactivate: (product: Product) => void;
}

export const ProductTable = memo(function ProductTable({
  products,
  searchTerm,
  onEdit,
  onDelete,
  onDeactivate,
}: ProductTableProps) {
  return (
    <Table>
      <thead>
        <HeaderRow>
          <th>Nome/Nome Técnico</th>
          <th>Registro</th>
          <th>Classe de Risco</th>
          <th>Status</th>
          <th>Ações</th>
        </HeaderRow>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan={5}>
              <EmptyState hasSearchTerm={!!searchTerm} />
            </td>
          </tr>
        ) : (
          products.map((product) => (
            <ProductTableRow
              key={product.id}
              product={product}
              onEdit={onEdit}
              onDelete={() => onDelete(product)}
              onDeactivate={() => onDeactivate(product)}
            />
          ))
        )}
      </tbody>
    </Table>
  );
});
