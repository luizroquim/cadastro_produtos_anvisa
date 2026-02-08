import { memo } from "react";
import { SquarePenIcon, Trash2Icon, CircleX } from "lucide-react";
import { Button } from "../Reuse/Button";
import type { Product } from "../../hooks/useProducts";
import { Row } from "./styles";

interface ProductTableRowProps {
  product: Product;
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
  onDeactivate?: (id: string) => void;
}

export const ProductTableRow = memo(function ProductTableRow({
  product,
  onDelete,
  onEdit,
  onDeactivate,
}: ProductTableRowProps) {
  return (
    <Row>
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
          {onEdit && (
            <Button
              buttonColor="ghost"
              variant="iconSmall"
              title="Editar"
              onClick={() => onEdit(product.id)}
            >
              <SquarePenIcon size={18} strokeWidth={2.5} />
            </Button>
          )}

          <Button
            buttonColor="ghost"
            variant="iconSmall"
            title="Excluir"
            onClick={() => onDelete(product.id)}
          >
            <Trash2Icon size={18} strokeWidth={2.5} />
          </Button>

          {onDeactivate && (
            <Button
              buttonColor="ghost"
              variant="iconSmall"
              title="Desativar"
              onClick={() => onDeactivate(product.id)}
            >
              <CircleX size={18} strokeWidth={2.5} />
            </Button>
          )}
        </div>
      </td>
    </Row>
  );
});
