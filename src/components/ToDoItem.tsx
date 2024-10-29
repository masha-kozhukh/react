import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextWithId } from "../types/common";

type ToDoItem = {
  item: TextWithId;
  updateItem: () => void;
  deleteItem: (id: number) => void;
  setNewTextWithId: (item: TextWithId | null) => void;
  newTextWithId: TextWithId | null;
};

export const ToDoItem: React.FC<ToDoItem> = ({
  item,
  updateItem,
  deleteItem,
  setNewTextWithId,
  newTextWithId,
}) => {
  const isEdit = newTextWithId?.id === item.id;
  return (
    <li>
      {isEdit ? (
        <Input
          onChange={(e) =>
            setNewTextWithId({
              id: newTextWithId.id,
              text: e.target.value,
            })
          }
          value={newTextWithId.text}
          type="text"
        />
      ) : (
        item.text
      )}
      <Button onClick={() => deleteItem(item.id)} name="remove item" />
      <Button
        onClick={() => {
          if (isEdit) {
            updateItem();
          } else {
            setNewTextWithId(item);
          }
        }}
        name={isEdit ? "Save" : "Edit"}
      />
    </li>
  );
};
