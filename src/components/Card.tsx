import React from "react";
import { Link } from "../types/common";

export type Profession = {
  name: string;
  text: string;
  id: number;
  icon: JSX.Element;
};

type Props = {
  profession: Omit<Profession, "id">;
  link: Link;
};

export const Card = React.memo((props: Props) => {
  const {
    profession: { icon, name, text },
    link: { name: linkName, href },
  } = props;

  return (
    <div className="card">
      {icon}
      <h3>{name}</h3>
      <p>{text}</p>
      <a className="card-link" href={href}>
        {linkName}
      </a>
    </div>
  );
});
