import { TitleContainer } from "../../components/TitleContainer";
import { InputField } from "../../components/Reuse/InputField";
import { Container, Content, Form, FormData, RowField } from "./styles";
import { Select } from "../../components/Reuse/Select";
import { Button } from "../../components/Reuse/Button";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


type FormDataProps = {
  productName: string;
  technicalName: string;
  anvisaRegister: string;
  riskClass: string;
  status: string;
  date?: string;
};

const schema:yup.ObjectSchema<FormDataProps> = yup.object({
  productName: yup.string().trim().required("Nome do produto é obrigatório."),
  technicalName: yup.string().trim().required("Nome técnico do produto é obrigatório."),
  anvisaRegister: yup.string().trim().required("Número de registro é obrigatório."),
  riskClass: yup.string().required("Selecione uma classe de risco."),
  status: yup.string().required("Selecione um status de regularidade."),
  date: yup
    .string()
    .optional()
    .when("status", {
      is: "Data de vencimento",
      then: (schema) => schema.required("Data de vencimento é obrigatória."),
    }),
});


export function NewProduct() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      productName: "",
      technicalName: "",
      anvisaRegister: "",
      riskClass: "",
      status: "",
      date: "",
    },
    resolver: yupResolver(schema),
  });

  const selectedStatus = watch("status");

  function onSubmit(data: FormDataProps) {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <TitleContainer
          title="Cadastre um novo produto"
          subtitle="Preencha os campos para adicionar um item ao catálogo"
        />

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormData>
            <Controller
              control={control}
              name="productName"
              render={({ field }) => (
                <InputField
                  placeholder="Ex: Luva descartável estéril"
                  error={errors.productName?.message}
                  {...field}
                >
                  Nome do Produto:
                </InputField>
              )}
            />

            <Controller
              control={control}
              name="technicalName"
              render={({ field }) => (
                <InputField
                  placeholder="Ex: Luvas descartáveis"
                  error={errors.technicalName?.message}
                  {...field}
                >
                  Nome Técnico do Produto:
                </InputField>
              )}
            />

            <Controller
              control={control}
              name="anvisaRegister"
              render={({ field }) => (
                <InputField
                  placeholder="Ex:10330660003"
                  error={errors.anvisaRegister?.message}
                  {...field}
                >
                  Número do Registro da Anvisa:
                </InputField>
              )}
            />

            <RowField>
              <Controller
                control={control}
                name="riskClass"
                render={({ field }) => (
                  <Select
                    legend="Classe de Risco"
                    error={errors.riskClass?.message}
                    {...field}
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
                )}
              />
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select
                    legend="Status de Regularidade"
                    {...field}
                    error={errors.status?.message}
                  >
                    <option value="Vigente">Vigente</option>
                    <option value="Vencido">Vencido</option>
                    <option value="Em revalidação">Em revalidação</option>
                    <option value="Data de vencimento">
                      Data de vencimento
                    </option>
                  </Select>
                )}
              />

              {selectedStatus === "Data de vencimento" && (
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <InputField
                      type="date"
                      error={errors.date?.message}
                      {...field}
                    >
                      Data de vencimento:
                    </InputField>
                  )}
                />
              )}
              
            </RowField>
            <RowField>
              <Button buttonColor="outline" variant="base" isLoading={false}>
                Cancelar
              </Button>

              <Button
                type="submit"
                buttonColor="primary"
                variant="base"
                isLoading={false}
              >
                Cadastrar
              </Button>
            </RowField>
          </FormData>
        </Form>
      </Content>
    </Container>
  );
}
