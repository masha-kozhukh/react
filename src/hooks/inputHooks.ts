import React from "react";

export const inputHooks = {
  useInputChange(setValue: (value: React.SetStateAction<string>) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    };
  },
};
