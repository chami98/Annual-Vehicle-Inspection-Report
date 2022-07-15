import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BottomPagination({ page, setPage }) {
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  return <Pagination count={5} page={page} onChange={handleChange} />;
}
