// Form.tsx
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TextInput from "./TextForm";

const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 4px;
`;

export interface IForm {
  nome: string;
  email: string;
}
export const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Nome:"
        name="nome"
        placeholder="Digite seu nome"
        register={register("nome", { required: "Campo obrigatório" })}
      />
      {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

      <TextInput
        label="E-mail:"
        name="email"
        placeholder="Digite seu e-mail"
        register={register("email", {
          required: "Campo obrigatório",
          pattern: /^\S+@\S+$/i,
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <button type="submit">Enviar</button>
    </StyledForm>
  );
};

export default Form;
