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

type UseToDoListParams = {
  initialItems: TextWithId[];
};

const hooks = {
  useToDoList({ initialItems }: UseToDoListParams) {
    const [items, setItems] = React.useState<TextWithId[]>(initialItems);
    const [newText, setNewText] = React.useState<string>("");

    const handleAddItem = React.useCallback(() => {
      setItems((previousState) => [
        ...previousState,
        { id: Date.now(), text: newText },
      ]);

      setNewText("");
    }, [newText, setItems, setNewText]);

    const handleUpdateItem = React.useCallback(
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

    const handleDeleteItem = React.useCallback(
      (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      },
      [setItems]
    );

    const handleInputChange = inputHooks.useInputChange(setNewText);

    return {
      items,
      newText,
      handleAddItem,
      handleUpdateItem,
      handleDeleteItem,
      handleInputChange,
    };
  },
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

  const {
    items,
    newText,
    handleAddItem,
    handleUpdateItem,
    handleDeleteItem,
    handleInputChange,
  } = hooks.useToDoList({
    initialItems,
  });

  return (
    <section>
      <p className="subTitle">{subtitle}</p>

      <h1 className="title">{title}</h1>

      <div>
        <Input
          onChange={handleInputChange}
          value={newText}
          placeholder={placeholder}
        />

        <Button
          disabled={!newText.trim()}
          onClick={handleAddItem}
          name={buttonTextAdd}
          className={classNameAddButton}
        />

        <ul>
          {items.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              updateItem={handleUpdateItem}
              deleteItem={handleDeleteItem}
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
