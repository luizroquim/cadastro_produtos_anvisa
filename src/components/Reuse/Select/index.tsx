import { FieldSetForm } from "./styles";
import { SelectForm } from "./styles";

type SelectProps = React.ComponentProps<"select"> & {
  legend?: string;
};
export function Select({ legend, children, ...rest }: SelectProps) {
  return (
    <FieldSetForm>
      <legend>{legend}</legend>

      <SelectForm {...rest}>
       <option>Selecione</option>
        {children}
      </SelectForm>
    </FieldSetForm>
  );
}
