import * as React from "react";

import Paper from "@mui/material/Paper";

import { styled } from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import CaptureData from "./Components/CaptureData";
import BreakSystem from "./Components/BreakSystem";
import CouplingDevices from "./Components/CouplingDevices";

function App() {
  const [value, setValue] = React.useState("chamikara");

  const [page, setPage] = React.useState(1);
  const [visible, setVisible] = React.useState(true);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Homepage setPage={setPage} setValue={setValue} page={page} />
          }
        /> */}
        {/* <Route path="BreakSystem" element={<BreakSystem />} /> */}
        <Route path="/" element={<CaptureData />} />
        {/* <Route path="CouplingDevices" element={<CouplingDevices />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
