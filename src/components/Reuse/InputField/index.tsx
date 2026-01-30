import type { InputHTMLAttributes } from "react";
import { IconError, InputContainer, InputContent, InputError } from "./styles";

import InputIconError from "../../../assets/alert-circle.svg";

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

        {error && (
          <InputError>
            <IconError src={InputIconError} />
            <p>{error}</p>
          </InputError>
        )}
      </InputContent>
    </InputContainer>
  );
}
