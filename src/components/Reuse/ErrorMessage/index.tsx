import { FieldErrorMessage, IconError } from "./styles";
import InputIconError from "../../../assets/alert-circle.svg";

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <FieldErrorMessage>
      <IconError src={InputIconError} alt="Ícone de alerta" />
      <p>{message}</p>
    </FieldErrorMessage>
  );
}
