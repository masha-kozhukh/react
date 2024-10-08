import React from "react";
import { Content, Panel } from "./Panel";

export type AccordionsProps = {
  subtitle: string;
  title: string;
  contents: Content[];
};

export const Accordion = React.memo((props: AccordionsProps) => {
  const { subtitle, title, contents } = props;
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  return (
    <section className="accordion">
      <p className="subTitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <div className="accordion-block">
        {contents.map((item) => (
          <Panel
            key={item.id}
            activeIndex={activeIndex}
            setActiveIndex={() => setActiveIndex(item.id)}
            content={item}
          />
        ))}
      </div>
    </section>
  );
});
