import { log } from "console";
import React, { useState } from "react";

export type ButtonsProps = {};

export const Button = React.memo((props: ButtonsProps) => {
  const {} = props;
  const [show, setShow] = useState(false);
  const onShowClick = () => {
    console.log("hhhh");
    // if (show) {
    //   setShow(true);
    // } else setShow(false);
    show ? setShow(true) : setShow(false);
  };
  return (
    <div>
      <button onClick={onShowClick}>Click Me</button>
      {show && <h1>dddddd</h1>}
    </div>
  );
});
