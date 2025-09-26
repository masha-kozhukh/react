import React from "react";

export type OptionsProps = {
  className?: string;
  value?: string;
  label: string;
  select?: boolean;
  disabled?: boolean;
};

export const Option = React.memo((props: OptionsProps) => {
  const {
    value,
    label,
    select = false,
    disabled = false,
    className = "option",
  } = props;
  return (
    <option value={value} disabled={disabled} className={className}>
      {label}
    </option>
  );
});
