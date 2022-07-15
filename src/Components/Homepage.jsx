import React, { Component } from "react";
import { Box, TextField } from "@mui/material";
import { Container } from "@mui/system";

import Divider from "@mui/material/Divider";

import Stack from "@mui/material/Stack";
import BrakeSystem from "./BreakSystem";
import Header from "./Header";
import Title from "./Title";

const Homepage = ({ setPage, setValue, page }) => {
  return (
    <Box mb={0} pb={0} sx={{ width: "100vw", height: "100vh" }}>
      <Box mb={0} pb={0} sx={{ width: "100vw", height: "100vh" }}>
        <Container maxWidth="xl">
          <Box
            m={0}
            p={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            {" "}
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Box display="flex" sx={{ width: "70%" }}>
              <Title TitleName="Annual Vehicle Inspection Report" />

              </Box>
              <Header page={page} setPage={setPage} />
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              {" "}
            </Stack>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            m={0}
            p={0}
            alignItems="center"
          ></Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage;
