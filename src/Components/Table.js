import { useState, useEffect, useCallback } from "react";
import { DataGrid } from "@material-ui/data-grid";

import DeleteButton from "./Delete";
import Textfield from "./TextField";
import CheckBox from "./Checkbox";

export default function Table({ context, index: setIndex }) {
  const [rows, setRows] = useState([]);

  const checkSelection = useCallback(
    (row, key, checked) => {
      const updatedRows = rows.map((item) => {
        if (item.key === row.key) {
          if (key === "recommend" && !checked) {
            item.recommend = !checked;
            item.isKey = checked;
            item.mandatory = checked;
          } else {
            item[key] = !checked;
          }
        }

        return item;
      });

      setRows(updatedRows);
    },
    [rows]
  );

  // const updated = useMemo(() => [...data], [context]);
  const columns = [
    { field: "id", headerName: "Context", width: 130 },
    {
      field: "value",
      headerName: "Context Value",
      flex: 1,
      renderCell: Textfield,
    },
    {
      field: "isKey",
      headerName: "Is Key",
      renderCell: ({ row }) => {
        return (
          <CheckBox
            checked={row.isKey}
            change={checkSelection}
            row={row}
            skey="isKey"
          />
        );
      },
      flex: 1,
      type: "boolean",
      editable: true,
    },
    {
      field: "mandatory",
      headerName: "Mandatory",
      renderCell: ({ row }) => {
        return (
          <CheckBox
            checked={row.mandatory}
            change={checkSelection}
            row={row}
            skey="mandatory"
          />
        );
      },
      flex: 1,
      type: "boolean",
      editable: true,
    },
    {
      field: "recommend",
      headerName: "Recommended",
      renderCell: ({ row }) => {
        return (
          <CheckBox
            checked={row.recommend}
            change={checkSelection}
            row={row}
            skey="recommend"
          />
        );
      },
      flex: 1,
      type: "boolean",
      editable: true,
    },
    {
      field: "remove",
      headerName: " ",
      width: 100,
      renderCell: () => (
        <DeleteButton
          press={(evt) => {
            const index = parseInt(
              evt.currentTarget.parentNode.getAttribute("data-rowindex"),
              10
            );
            const { key, id } = rows[index];
            const filtered = rows.filter((_, i) => i !== index);

            setRows(filtered);
            setIndex({ key, id });
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (context) {
      const updated = [...rows];
      const { key, item } = context;
      updated.push({
        key,
        id: item,
        value: 1000,
        isKey: true,
        mandatory: true,
        recommend: false,
      });

      setRows(updated);
    }
  }, [context]);

  return (
    <div style={{ display: "flex", height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick={true}
      />
    </div>
  );
}
