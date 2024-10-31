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
  
  const onInputChangeNewTextWithId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setNewTextWithId({
        id: newTextWithId?.id ?? 0,
        text: e.target.value,
      }),
    [newTextWithId]
  );

  const onClickRemove = React.useCallback(() => {
    deleteItem(item.id);
  }, [item.id]); //bug, something goes wrong when deleting items

  const onClickUndate = React.useCallback(() => {
    if (isEdit) {
      updateItem();
    } else {
      setNewTextWithId(item);
    }
  }, [isEdit, updateItem, setNewTextWithId, item]);

  return (
    <li>
      {isEdit ? (
        <Input
          onChange={onInputChangeNewTextWithId}
          value={newTextWithId.text}
          type="text"
        />
      ) : (
        item.text
      )}
      <Button disabled={isEdit} onClick={onClickRemove} name="remove item" />
      <Button onClick={onClickUndate} name={isEdit ? "Save" : "Edit"} />
    </li>
  );
};
