import React from "react";
import { ToDoItem } from "./ToDoItem";
import { Button } from "./Button";
import { Input } from "./Input";

export type ListsProps = {
  initialItems: { id: number; text: string }[];
  subtitle: string;
  title: string;
  type: string;
};

export const ToDoList = React.memo((props: ListsProps) => {
  const { subtitle, title, type, initialItems } = props;
  const [text, setText] = React.useState<string>("");
  const [items, setItems] =
    React.useState<{ id: number; text: string }[]>(initialItems);
  const [editId, setEditId] = React.useState<number | null>(null);
  const [editText, setEditText] = React.useState<string>("");

  const addItem = () => {
    if (text.trim()) {
      const newItem = { id: Date.now(), text };
      setItems([...items, newItem]);
      setText("");
    }
  };
  const updateItem = (item: { id: number; text: string }) => {
    setItems(items.map((t) => (t.id === item.id ? item : t)));
  };
  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="">
      <p className="subTitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <div>
        <Input
          onChange={(e) => setText(e.target.value)}
          type={type}
          value={text}
          placeholder="Введіть текст"
        />
        <Button onClick={addItem} name="add list" />
        <ul>
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              editId={editId}
              editText={editText}
              setEditId={setEditId}
              setEditText={setEditText}
              updateItem={updateItem}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </section>
  );
});
