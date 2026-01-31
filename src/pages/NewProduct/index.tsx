import { TitleContainer } from "../../components/TitleContainer";
import { InputField } from "../../components/Reuse/InputField";
import { Container, Content, Form, FormData, RowField } from "./styles";
import { Select } from "../../components/Reuse/Select";
import { useState } from "react";
import { Button } from "../../components/Reuse/Button";

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
            <InputField placeholder="Ex: Luva descartável estéril" error={"Nome do produto  é obrigatório"}>
              Nome do Produto:
            </InputField>

            <InputField placeholder="Ex: Luvas descartáveis">
              Nome Técnico do Produto:
            </InputField>

            <InputField placeholder="Ex:10330660003">
              Número do Registro da Anvisa:
            </InputField>
            <RowField>
              <Select
                required
                legend="Classe de Risco"
                error="Classe de risco é obrigatória"
              >
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
                <option value="Data de vencimento">Data de vencimento</option>
              </Select>
              {status === "Data de vencimento" && (
                <InputField error={"Data de vencimento é obrigatória"}type="date">Data de vencimento:</InputField>
              )}
            </RowField>
            <RowField>
              
              <Button buttonColor="cancel" variant="base" isLoading={false}>
                Cancelar
              </Button>

              <Button buttonColor="primary" variant="base" isLoading={false}>
                Cadastrar
              </Button>
            </RowField>
          </FormData>
        </Form>
      </Content>
    </Container>
  );
}
