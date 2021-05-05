import { useState } from "react";

import { Container } from "@material-ui/core";
import Dropdown from "./Dropdown";
import Table from "./Table";

export default function Contet() {
  const [context, setContext] = useState("");
  const [index, setIndex] = useState("");

  return (
    <Container>
      <Dropdown update={setContext} addDropdown={index} />
      <br />
      <Table context={context} index={setIndex} />
    </Container>
  );
}
