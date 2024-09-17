import React from "react";
import { Link } from "../types/common";

export type Block = {
  subtitle: string;
  title: string;
  text: string;
  id: number;
  icon: JSX.Element;
};

type Props = {
  block: Omit<Block, "id">;
  link: Link;
};

export const Content = React.memo((props: Props) => {
  const {
    block: { icon, subtitle, title, text },
    link: { name: linkName, href },
  } = props;

  return (
    <div className="block">
      <div>{icon}</div>
      <div>
        <h3 className="subtitle">{subtitle}</h3>
        <h2 className="block-title">{title}</h2>
        <p className="text">{text}</p>
      </div>

      <a className="card-link" href={href}>
        {linkName}
      </a>
    </div>
  );
});
