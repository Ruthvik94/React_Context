import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export default function ({ press }) {
  return (
    <IconButton color="secondary" aria-label="delete" onClick={press}>
      <Delete />
    </IconButton>
  );
}
