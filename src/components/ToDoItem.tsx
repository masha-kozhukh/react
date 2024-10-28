import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";

type ToDoItemProps = {
  item: { id: number; text: string };
  editId: number | null;
  editText: string;
  setEditId: (id: number | null) => void;
  setEditText: (text: string) => void;
  updateItem: (item: { id: number; text: string }) => void;
  deleteItem: (id: number) => void;
};

export const ToDoItem: React.FC<ToDoItemProps> = ({
  item,
  editId,
  editText,
  setEditId,
  setEditText,
  updateItem,
  deleteItem,
}) => {
  return (
    <li>
      {editId === item.id ? (
        <Input
          onChange={(e) => setEditText(e.target.value)}
          value={editText}
          type="text"
        />
      ) : (
        item.text
      )}
      <Button onClick={() => deleteItem(item.id)} name="remove item" />
      <Button
        onClick={() => {
          if (editId === item.id) {
            updateItem({ id: item.id, text: editText });
            setEditId(null);
          } else {
            setEditId(item.id);
            setEditText(item.text);
          }
        }}
        name={editId === item.id ? "Save" : "Edit"}
      />
    </li>
  );
};