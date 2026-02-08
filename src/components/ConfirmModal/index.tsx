import { ConteinerConfirmModal ,TitleContainerModal} from "./styles";
import { Button } from "../Reuse/Button";
import { Overlay, RowField } from "../../pages/NewProduct/styles";

interface ConfirmeModalProps {
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export function ConfirmModal({
  title,
  message,
  onClose,
  onConfirm,
  isLoading,
}: ConfirmeModalProps) {
  return (
    <Overlay>
      <ConteinerConfirmModal>
        <TitleContainerModal>
          <strong>{title}</strong>
         <small>{message}</small>
        </TitleContainerModal>

        <RowField>
          <Button buttonColor="outline" onClick={onClose} disabled={isLoading}>
            Cancelar
          </Button>

          <Button
            buttonColor="primary"
            onClick={onConfirm}
            isLoading={isLoading}
          >
            Confirmar
          </Button>
        </RowField>
      </ConteinerConfirmModal>
    </Overlay>
  );
}
