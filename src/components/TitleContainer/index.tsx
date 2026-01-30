import type { HTMLAttributes } from "react";
import { Title } from "./styles";

interface TitleContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function TitleContainer({
  title,
  subtitle,
  ...props
}: TitleContainerProps) {
  return (
    <Title {...props}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </Title>
  );
}
