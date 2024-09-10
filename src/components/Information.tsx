// import { Card, Profession } from "./Card";
import React from "react";

export type InformationProps = {
  subtitle: string;
  title: string;
  text: string;
  src:string;
  alt:string;
  //   professions: Profession[];
};

export const Information = React.memo((props: InformationProps) => {
  //   const { subtitle, title, professions } = props;
  const { subtitle, title, text } = props;

  return (
    <section className="">
      <div className="">
        <p className="subTitle">{subtitle}</p>
        <h1 className="title">{title}</h1>
        <p className="text">{text}</p>
      </div>
      <div>
        <img src="{src}" alt="{alt}" />
      </div>

      {/* <div className="carsBlock">
        {professions.map((item) => (
          <Card key={item.id} profession={item} />
        ))}
      </div> */}
    </section>
  );
});
