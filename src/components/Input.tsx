import React from "react";

export type InputsProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value: string;
  placeholder?: string;
};

export const Input = React.memo((props: InputsProps) => {
  const { onChange, type, value, placeholder } = props;
  return (
    <input
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
});
