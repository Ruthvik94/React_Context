import { useState } from "react";
import { Checkbox } from "@material-ui/core";

export default function CheckBox({ checked, change, row, skey }) {
  // const [selected, setSelected] = useState(checked);

  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        change(row, skey, checked);
      }}
      color="primary"
    />
  );
}

/* export function CheckBoxLeft({ checked }) {
  const [selected, setSelected] = useState(checked);

  return (
    <Checkbox
      onChange={() => setSelected(!selected)}
      checked={selected}
      color="primary"
    />
  );
}
export function CheckBoxMiddle({ checked }) {
  const [selected, setSelected] = useState(checked);

  return (
    <Checkbox
      onChange={() => setSelected(!selected)}
      checked={selected}
      color="primary"
    />
  );
}
export function CheckBoxRight({ checked }) {
  const [selected, setSelected] = useState(checked);

  return (
    <Checkbox
      onChange={() => setSelected(!selected)}
      checked={selected}
      color="primary"
    />
  );
} */
