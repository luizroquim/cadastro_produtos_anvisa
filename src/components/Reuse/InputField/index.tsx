import type { InputHTMLAttributes } from "react";
import { InputContainer, InputContent  } from "./styles";
import { ErrorMessage } from "../ErrorMessage";


interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  error?: string;
}
export function InputField({ error, children, ...props }: InputFieldProps) {
  return (
    <InputContainer error={error}>
      <label>{children}</label>
      <InputContent>
        <input {...props} />

        {error &&<ErrorMessage message={error}/>}
      </InputContent>
    </InputContainer>
  );
}
