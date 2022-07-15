import { Button, Divider, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import BottomPagination from "./BottomPagination";
import SecondHeader from "./SecondHeader";
import VehicleHistoryRecord from "./VehicleHistoryRecord";
const Header = ({ page, setPage }) => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="column"
        // divider={<Divider orientation="horizontal" flexItem />}
        spacing={1}
      >
        <VehicleHistoryRecord />
        <SecondHeader setPage={setPage}/>
        
      </Stack>
    </Container>
  );
};

export default Header;
