import React from "react";
import { Button } from "./Button";
import { Input, InputType } from "./Input";
import { TextWithId } from "../types/common";
import { inputHooks } from "../hooks/inputHooks";

type ToDoItemParams = {
  updateItem: (newTextWithId: TextWithId | null) => void;
  deleteItem: (id: number) => void;
  item: TextWithId;
};

const hooks = {
  useToDoItem({ updateItem, deleteItem, item }: ToDoItemParams) {
    const [newText, setNewText] = React.useState<string>(item.text);
    const [isEdit, setIsEdit] = React.useState<boolean>(false);

    const onInputChangeNewText = inputHooks.useInputChange(setNewText);

    const onClickRemove = React.useCallback(() => {
      deleteItem(item.id);
    }, [deleteItem, item.id]);

    const onClickUpdate = React.useCallback(() => {
      if (!!newText) {
        updateItem({
          id: item.id,
          text: newText,
        });
      }
      setIsEdit((previousState) => !previousState);
    }, [newText, updateItem, item, setIsEdit]);

    return {
      isEdit,
      onInputChangeNewText,
      newText,
      onClickUpdate,
      onClickRemove,
    };
  },
};

export type ToDoItem = ToDoItemParams & {
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
  className = "item",
  buttonTextRemove,
  buttonTextSave,
  buttonTextEdit,
  editInputType = InputType.text,
}) => {
  const {
    isEdit,
    onInputChangeNewText,
    newText,
    onClickUpdate,
    onClickRemove,
  } = hooks.useToDoItem({
    updateItem,
    deleteItem,
    item,
  });

  return (
    <li className={className}>
      {isEdit ? (
        <Input
          onChange={onInputChangeNewText}
          value={newText}
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

      <Button
        onClick={onClickUpdate}
        name={isEdit ? buttonTextSave : buttonTextEdit}
      />
    </li>
  );
};
