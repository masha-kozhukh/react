import React from "react";
import { Button } from "./Button";

export type ListsProps = {
  subtitle: string;
  title: string;
  type: string;
  placeholder: string;
  id: number;
  text: string;
};

export const ToDoList = React.memo((props: ListsProps) => {
  const { subtitle, title, type, placeholder, id } = props;
  const [text, setText] = React.useState<string>("");
  const [items, setItems] = React.useState<{ id: number; text: string }[]>([]);

  const addItem = () => {
    if (text.trim()) {
      const newItem = { id: Date.now(), text };
      setItems([...items, newItem]);
      setText("");
    }
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="">
      <p className="subTitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <div>
        <input
          type={type}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
        />

        <Button onClick={addItem} name="add list" />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <Button onClick={() => deleteItem(item.id)} name="remove item" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});
