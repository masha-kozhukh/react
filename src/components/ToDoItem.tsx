import React from "react";
import { Button } from "./Button";
import { Input, InputType } from "./Input";
import { TextWithId } from "../types/common";
import { text } from "node:stream/consumers";

export type ToDoItem = {
  item: TextWithId;
  updateItem: () => void;
  deleteItem: (id: number) => void;
  setNewTextWithId: (item: TextWithId | null) => void;
  newTextWithId: TextWithId | null;
  className?: string;
  buttonTextRemove: string;
  buttonTextSave: string;
  buttonTextEdit: string;
  editInputType?: InputType;
};

export const ToDoItem: React.FC<ToDoItem> = ({
  item,
  updateItem,
  deleteItem,
  setNewTextWithId,
  newTextWithId,
  className = "item",
  buttonTextRemove,
  buttonTextSave,
  buttonTextEdit,
  editInputType = InputType.text,
}) => {
  const isEdit = newTextWithId?.id === item.id;

  const onInputChangeNewTextWithId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setNewTextWithId({
        id: newTextWithId?.id ?? 0,
        text: e.target.value,
      }),
    [setNewTextWithId, newTextWithId]
  );

  const onClickRemove = React.useCallback(() => {
    deleteItem(item.id);
  }, [deleteItem, item.id]);

  const onClickUndate = React.useCallback(() => {
    if (isEdit) {
      updateItem();
    } else {
      setNewTextWithId(item);
    }
  }, [isEdit, updateItem, setNewTextWithId, item]);

  return (
    <li className={className}>
      {isEdit ? (
        <Input
          onChange={onInputChangeNewTextWithId}
          value={newTextWithId.text}
          type={editInputType}
        />
      ) : (
        item.text
      )}
      <Button
        disabled={isEdit}
        onClick={onClickRemove}
        name={buttonTextRemove}
      />
      <Button onClick={onClickUndate} name={isEdit ? buttonTextSave : buttonTextEdit} />
    </li>
  );
};
