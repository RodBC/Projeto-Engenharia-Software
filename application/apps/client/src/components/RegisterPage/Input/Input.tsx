import React from "react";
import * as C from "./styles";

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, name, id, required }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      required={required}
    />
  );
};

export default Input;
