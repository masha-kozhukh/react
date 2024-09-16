import { Link } from "../types/common";
import { Content, Block } from "./Content";
import React from "react";

export type InformationProps = {
  title: string;
  blocks: Block[];
  // link:Link;
};

export const Information = React.memo((props: InformationProps) => {
  // const { title, blocks, link } = props;
  const { title, blocks } = props;

  return (
    <section className="information">
      <h2 className="title">{title}</h2>
      <div className="Content-block">
        {/* {blocks.map((item) => (
          <Content key={item.id} block={item} link={link} />
        
        ))} */}
        {blocks.map((item) => (
          <Content key={item.id} block={item} />
        ))}
      </div>
    </section>
  );
});
