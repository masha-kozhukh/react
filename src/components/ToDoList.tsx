import React from "react";
import { ToDoItem } from "./ToDoItem";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextWithId } from "../types/common";

export type ListsProps = {
  initialItems: TextWithId[];
  subtitle: string;
  title: string;
  placeholder?: string;
  classNameAddButton?: string;
  buttonTextAdd: string;
  buttonTextRemove: string;
  buttonTextSave: string;
  buttonTextEdit: string;
};

export const ToDoList = React.memo((props: ListsProps) => {
  const {
    subtitle,
    title,
    initialItems,
    placeholder,
    classNameAddButton,
    buttonTextAdd,
    buttonTextRemove,
    buttonTextSave,
    buttonTextEdit,
  } = props;

  const [items, setItems] = React.useState<TextWithId[]>(initialItems);
  const [newText, setNewText] = React.useState<string>("");
  const [newTextWithId, setNewTextWithId] = React.useState<TextWithId | null>(
    null
  );

  const addItem = React.useCallback(() => {
    if (newText.trim()) {
      setItems([...items, { id: Date.now(), text: newText }]);
      setNewText("");
    }
  }, [newText, setItems, setNewText]);

  const updateItem = React.useCallback(() => {
    setItems(
      items.map((t) => (t.id === newTextWithId?.id ? newTextWithId : t))
    );
    setNewTextWithId(null);
  }, [setItems, newTextWithId, setNewTextWithId]);

  const deleteItem = React.useCallback(
    (id: number) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    },
    [setItems]
  );

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setNewText(e.target.value),
    [setNewText]
  );

  return (
    <section className="">
      <p className="subTitle">{subtitle}</p>
      <h1 className="title">{title}</h1>
      <div>
        <Input
          onChange={onInputChange}
          value={newText}
          placeholder={placeholder}
        />
        <Button
          disabled={!newText.trim()}
          onClick={addItem}
          name={buttonTextAdd}
          className={classNameAddButton}
        />
        <ul>
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              updateItem={updateItem}
              deleteItem={deleteItem}
              setNewTextWithId={setNewTextWithId}
              newTextWithId={newTextWithId}
              buttonTextRemove={buttonTextRemove}
              buttonTextSave={buttonTextSave}
              buttonTextEdit={buttonTextEdit}
            />
          ))}
        </ul>
      </div>
    </section>
  );
});
