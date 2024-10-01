import React from "react";
import { Button } from "./Button";

export type Content = {
  name: string;
  text: string;
  id: number;
};

type Props = {
  content: Omit<Content, "id">;
};

export const Panel = React.memo((props: Props) => {
  const {
    content: { name, text },
  } = props;

  return (
    <div className="panel">
      <h3>{name}</h3>
      <p>{text}</p>
      {/* <Button onClick={onShowPanel} name="show" /> */}
    </div>
  );
});
