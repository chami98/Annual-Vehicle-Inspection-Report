import { Card, CardContent, Divider, FormControl, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Button,
  Checkbox,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";

const CouplingDevices = () => {
  const [dateSB, setDateSB] = React.useState(new Date("2022-07-18T21:11:54"));
  const handleDateSB = (newValue) => {
    setDateSB(newValue);
  };
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Card sx={{ width: "100%" }}>
          <CardContent>
            {/* <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
            Vehicle Components Inspected
          </Typography> */}
            {/* <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          > */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
              sx={{ width: "100%" }}
            >
              <FormControl>
                <Stack direction="row" spacing={2}></Stack>
                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Service Brakes</Divider>
                </Box>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="Ok" control={<Radio />} label="Ok" />
                  <FormControlLabel
                    value="Needs Repair"
                    control={<Radio />}
                    label="Needs Repair"
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Repaired Date "
                      inputFormat="MM/dd/yyyy"
                      value={dateSB}
                      onChange={handleDateSB}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CouplingDevices;
