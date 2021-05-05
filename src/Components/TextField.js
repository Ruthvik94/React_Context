import { useState } from "react";
import { TextField } from "@material-ui/core";

const checkInput = (value) => {
  value = parseInt(value, 10);
  return new Promise((resolve) => {
    if (value < 1000) {
      resolve(["Value should be above 1000", true, value]);
    } else if (value > 10000) {
      resolve(["Upper Limit Reached", true, 1000]);
    } else {
      resolve(["", false, value]);
    }
  });
};

export default function Textfield() {
  const [value, setValue] = useState(1000);
  const [helper, setHelper] = useState();
  const [error, setError] = useState(null);
  return (
    <TextField
      error={error}
      value={value}
      id="standard-error-helper-text"
      helperText={helper}
      type="number"
      onChange={async (evt) => {
        const [message, bool, reset] = await checkInput(evt.target.value);
        setValue(reset.toString());
        setError(bool);
        setHelper(message);
      }}
    />
  );
}
