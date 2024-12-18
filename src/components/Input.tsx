import React from "react";

export enum InputType {
  button = "button",
  checkbox = "checkbox",
  color = "color",
  date = "date",
  datetimeLocal = "datetime-local",
  email = "email",
  file = "file",
  hidden = "hidden",
  image = "image",
  month = "month",
  number = "number",
  password = "password",
  radio = "radio",
  range = "range",
  reset = "reset",
  search = "search",
  submit = "submit",
  tel = "tel",
  text = "text",
  time = "time",
  url = "url",
  week = "week",
}

export type InputsProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;
  value: string;
  placeholder?: string;
  className?: string;
};

export const Input = React.memo((props: InputsProps) => {
  const {
    onChange,
    type = InputType.text,
    value,
    placeholder = "",
    className = "input",
  } = props;
  return (
    <input
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
    />
  );
});
