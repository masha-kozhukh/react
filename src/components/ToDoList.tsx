import React from "react";
import { ToDoItem } from "./ToDoItem";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextWithId } from "../types/common";
import { inputHooks } from "../hooks/inputHooks";

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

  const addItem = React.useCallback(() => {
    setItems((previousState) => [
      ...previousState,
      { id: Date.now(), text: newText },
    ]);

    setNewText("");
  }, [newText, setItems, setNewText]);

  const updateItem = React.useCallback(
    (newTextWithId: TextWithId | null) => {
      if (!newTextWithId || !newTextWithId.text || !newTextWithId.id) {
        return;
      }

      setItems((previousState) => {
        const indexOfUpdatingItem = previousState.findIndex(
          (item) => item.id === newTextWithId.id
        );

        if (indexOfUpdatingItem !== -1) {
          previousState[indexOfUpdatingItem].text = newTextWithId.text;
        }

        return previousState;
      });
    },
    [setItems]
  );

  const deleteItem = React.useCallback(
    (id: number) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    },
    [setItems]
  );

  const onInputChange = inputHooks.useInputChange(setNewText);

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
