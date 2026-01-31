
import { SelectForm ,SelectContainer,FieldSetForm} from "./styles";
import { ErrorMessage } from "../ErrorMessage";

type SelectProps = React.ComponentProps<"select"> & {
  legend?: string;
  error?: string;
};
export function Select({ error, legend, children, ...rest }: SelectProps) {
  return (
    <SelectContainer>
      <FieldSetForm error={error}>
        <legend>{legend}</legend>

        <SelectForm {...rest}>
          <option value="" disabled>
            Selecione
          </option>
          {children}
        </SelectForm>
       
      </FieldSetForm>
       {error && <ErrorMessage message={error} />}
    </SelectContainer>
  );
}
