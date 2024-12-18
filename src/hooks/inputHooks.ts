import React from "react";

export const inputHooks = {
  useInputChange(setValue: (value: React.SetStateAction<string>) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const result = e.currentTarget.value;

      if (!!result && result.trim().length !== 0) {
        setValue(result);
      }
    };
  },
};
