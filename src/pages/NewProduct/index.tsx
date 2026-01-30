import { TitleContainer } from "../../components/TitleContainer";
import { InputField } from "../../components/Reuse/InputField";
import { Container } from "./styles";
import { Content } from "./styles";
import { Form, FormData } from "./styles";
import { Select } from "../../components/Reuse/Select";

export function NewProduct() {
  return (
    <Container>
      <Content>
        <TitleContainer
          title="Cadastre um novo produto"
          subtitle="Preencha os campos para adicionar um item ao catálogo"
        />

        <Form>
          <FormData>
            <InputField
              placeholder="Ex: Luva descartável estéril"
              
            >
              Nome do Produto:
            </InputField>

            <InputField
              placeholder="Ex: Luvas Descartáveis"
              error={"Nome técnico do produto é obrigatório"}
            >
              Nome Técnico do Produto:
            </InputField>

            <InputField
              placeholder="Ex:10330660003"
              error={"Número do registro é obrigatório"}
            >
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

            <Select required legend="Status de Regularidade">
              <option value="Vigente">
                Vigente
              </option>
              <option value="Vencido">
                Vencido
              </option>
              <option value="Em revalidação">
                Em revalidação
              </option>
            </Select>


          </FormData>
        </Form>
      </Content>
    </Container>
  );
}
