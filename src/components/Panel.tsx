import React from "react";
import { Button } from "./Button";

export type Content = {
  name: string;
  text: string;
  id: number;
};

type Props = {
  activeIndex: number;
  setActiveIndex: () => void;
  content: Content;
};

export const Panel = React.memo((props: Props) => {
  const {
    activeIndex,
    setActiveIndex,
    content: { name, text, id },
  } = props;

  return (
    <div className="panel">
      <h3>{name}</h3>
      {activeIndex !== id && (
        <>
          <p>{text}</p>
          <Button onClick={setActiveIndex} name="show" />
        </>
      )}
    </div>
  );
});
