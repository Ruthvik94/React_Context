import { useState } from "react";

import Dropdown from "./Dropdown";
import Table from "./Table";

export default function Contet() {
  const [context, setContext] = useState("");
  const [index, setIndex] = useState("");

  return (
    <>
      <Dropdown update={setContext} addDropdown={index} />
      <br />
      <Table context={context} index={setIndex} />
    </>
  );
}
