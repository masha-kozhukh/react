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
      {/* <Button onClick={onShowClick} name="show" /> */}
      
    </div>
  );
});

// function Panel({ title, children, isActive, onShow }) {
//     return (
//         <section className="panel">
//             <h3>{title}</h3>
//             {isActive ? (
//                 <p>{children}</p>
//             ) : (
//                 <button onClick={onShow}>Show</button>
//             )}
//         </section>
//     );
// }
