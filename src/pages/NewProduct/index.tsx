import { TitleContainer } from "../../components/TitleContainer";
import { InputField } from "../../components/Reuse/InputField";
import { Container } from "./styles";
import { Content } from "./styles";
import { Form, FormData } from "./styles";
import { Select } from "../../components/Reuse/Select";
import { useState } from "react";

export function NewProduct() {
  const [status, SetStatus] = useState("");
  return (
    <Container>
      <Content>
        <TitleContainer
          title="Cadastre um novo produto"
          subtitle="Preencha os campos para adicionar um item ao catálogo"
        />

        <Form>
          <FormData>
            <InputField placeholder="Ex: Luva descartável estéril">
              Nome do Produto:
            </InputField>

            <InputField placeholder="Ex: Luvas descartáveis">
              Nome Técnico do Produto:
            </InputField>

            <InputField placeholder="Ex:10330660003">
              Número do Registro da Anvisa:
            </InputField>

            <Select required legend="Classe de Risco">
              <option value="Classe I - Baixo Risco">
                Classe I - Baixo Risco
              </option>
              <option value="Classe II - Médio Risco">
                Classe II - Médio Risco
              </option>
              <option value="Classe III - Alto Risco">
                Classe III - Alto Risco
              </option>
            </Select>

            <Select
              required
              legend="Status de Regularidade"
              onChange={(e) => SetStatus(e.target.value)}
            >
              <option value="Vigente">Vigente</option>
              <option value="Vencido">Vencido</option>
              <option value="Em revalidação">Em revalidação</option>
              <option value="Outro">Outro</option>
            </Select>
            {status === "Outro" && (
              <InputField type="date">Data de vencimento:</InputField>
            )}
          </FormData>
        </Form>
      </Content>
    </Container>
  );
}
