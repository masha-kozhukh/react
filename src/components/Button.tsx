import React from "react";

export enum ButtonType {
  submit = "submit",
  reset = "reset",
  button = "button",
}

export type ButtonsProps = {
  onClick: () => void;
  className?: string;
  name?: string;
  disabled?: boolean;
  type?: ButtonType;
};

export const Button = React.memo((props: ButtonsProps) => {
  const {
    className = "button",
    name,
    disabled = false,
    type = ButtonType.button,
    ...rest
  } = props;

  return (
    <button className={className} disabled={disabled} type={type} {...rest}>
      {name}
    </button>
  );
});
