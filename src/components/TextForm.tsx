// TextInput.tsx
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { IForm } from "./Form";
import { FC } from "react";

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

interface TextInputProps {
  label: string;
  register: UseFormRegister<IForm>;
}

const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const TextInput: FC<TextInputProps> = ({ label, register, ...rest }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput type="text" {...register} {...rest} />
    </InputContainer>
  );
};

export default TextInput;
