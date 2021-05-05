import { useState, useEffect, useRef } from "react";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export default function Dropdrown({ update, addDropdown }) {
  const dropdownValues = [
    { key: 1, item: "React" },
    { key: 2, item: "Vue" },
    { key: 3, item: "Angular" },
    { key: 4, item: "Svelte" },
  ];

  const [data, setData] = useState(dropdownValues);

  const [value, setValue] = useState("");
  const textField = useRef();

  useEffect(() => {
    if (addDropdown) {
      console.log(typeof addDropdown.key, typeof dropdownValues[0].key);
      const [removed] = dropdownValues.filter((i) => i.key === addDropdown.key);
      const localCopy = [...data];
      localCopy.push(removed);
      localCopy.sort(({ key: a }, { key: b }) => a - b);
      setData(localCopy);
    }

    textField.current.focus();
  }, [addDropdown]);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      inputValue={value}
      getOptionLabel={(option) => option.item}
      style={{ width: 300 }}
      onChange={(evt, value) => {
        update(value);
        const filtered = data.filter((item) => item.key !== value.key);
        setData(filtered);
        setValue("");
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Context Name"
          variant="outlined"
          inputRef={textField}
        />
      )}
    />
  );
}
