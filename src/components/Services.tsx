import { Link } from "../types/common";
import { Card, Profession } from "./Card";
import React from "react";


export type ServicesProps = {
  subtitle: string;
  title: string;
  professions: Profession[];
  link: Link;
};

export const Services = React.memo((props: ServicesProps) => {
  const { subtitle, title, professions, link } = props;

  return (
    <section className="services">
      <p className="subTitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <div className="carsBlock">
        {professions.map((item) => (
          <Card key={item.id} profession={item} link={link} />
        ))}
      </div>
    </section>
  );
});
