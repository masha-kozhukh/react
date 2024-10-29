import React from "react";
import { ToDoItem } from "./ToDoItem";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextWithId } from "../types/common";

export type ListsProps = {
  initialItems: TextWithId[];
  subtitle: string;
  title: string;
  type: string;
  placeholder?: string;
};

export const ToDoList = React.memo((props: ListsProps) => {
  const { subtitle, title, type, initialItems, placeholder } = props;
  const [items, setItems] = React.useState<TextWithId[]>(initialItems);
  const [newText, setNewText] = React.useState<string>("");
  const [newTextWithId, setNewTextWithId] = React.useState<TextWithId | null>(
    null
  );

  const addItem = () => {
    if (newText.trim()) {
      setItems([...items, { id: Date.now(), text: newText }]);
      setNewText("");
    }
  };
  const updateItem = () => {
    setItems(
      items.map((t) => (t.id === newTextWithId?.id ? newTextWithId : t))
    );
    setNewTextWithId(null);
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
          onChange={(e) => setNewText(e.target.value)}
          type={type}
          value={newText}
          placeholder={placeholder}
        />
        <Button disabled={!newText.trim()} onClick={addItem} name="add list" />
        <ul>
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              updateItem={updateItem}
              deleteItem={deleteItem}
              setNewTextWithId={setNewTextWithId}
              newTextWithId={newTextWithId}
            />
          ))}
        </ul>
      </div>
    </section>
  );
});
