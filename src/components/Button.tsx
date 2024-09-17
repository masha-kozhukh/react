import React from "react";

export type ButtonsProps = {
  onClick: () => void;
  name: string;
};

export const Button = React.memo((props: ButtonsProps) => {
  const { onClick, name } = props;

  return <button onClick={onClick}>{name}</button>;
});
