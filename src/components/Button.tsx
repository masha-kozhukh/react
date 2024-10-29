import React from "react";

export enum ButtonType {
  submit = "submit",
  reset = "reset",
  button = "button",
}

export type ButtonsProps = {
  onClick: () => void;
  name: string;
  disabled?: boolean;
  type?: ButtonType;
};

export const Button = React.memo((props: ButtonsProps) => {
  const { name, disabled = false, type = ButtonType.button, ...rest } = props;

  return (
    <button disabled={disabled} type={type} {...rest}>
      {name}
    </button>
  );
});
