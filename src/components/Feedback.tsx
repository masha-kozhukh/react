import React from "react";
import { Link } from "../types/common";
import { Content, Block } from "./Content";

export type FeedbackProps = {
  title: string;
  subtitle?: string;
  blocks: Block[];
  link: Link;
};

export const Feedback = React.memo((props: FeedbackProps) => {
  const { title, subtitle, blocks, link } = props;

  return (
    <section className="feedback">
      <h2 className="subTitle">{title}</h2>
      <p className="title">{subtitle}</p>
      <div className="feedback-content">
        {blocks.map((item) => (
          <Content key={item.id} block={item} link={link} />
        ))}
      </div>
    </section>
  );
});
