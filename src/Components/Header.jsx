import { Divider, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import SecondHeader from "./SecondHeader";
import VehicleHistoryRecord from "./VehicleHistoryRecord";
const Header = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <VehicleHistoryRecord />
        <SecondHeader/>
      </Stack>
    </Container>
  );
};

export default Header;
