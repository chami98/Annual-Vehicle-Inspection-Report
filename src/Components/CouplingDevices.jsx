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
  const [dateFW, setDateFW] = React.useState(new Date("2022-07-18T21:11:54"));
  const [datePH, setDatePH] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateDTE, setDateDTE] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateDTT, setDateDTT] = React.useState(new Date("2022-07-18T21:11:54"));




  const handleDateSB = (newValue) => {
    setDateSB(newValue);
  };

  const handleDateFW = (newValue) => {
    setDateFW(newValue);
  };

  const handleDatePH = (newValue) => {
    setDatePH(newValue);
  };

  const handleDateDTE = (newValue) => {
    setDateDTE(newValue);
  };

  const handleDateDTT = (newValue) => {
    setDateDTT(newValue);
  };
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        // alignItems="center"
        sx={{ width: "100%" }}
      >
        <Card sx={{ width: "50%" }}>
          <CardContent>
            <Box display="flex" justifyContent="center" alignItems="center" m={4} >
              <Typography variant="h4" component="h2">
                Coupling Devices
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              // minHeight="100vh"
              sx={{ width: "100%" }}
            >
              <FormControl>
                <Stack direction="row" spacing={2}></Stack>
                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Filth Wheels</Divider>
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
                      value={dateFW}
                      onChange={handleDateFW}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>
                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Pintle Hooks</Divider>
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
                      value={datePH}
                      onChange={handleDatePH}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>
                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Drawbar / Towbar Eye</Divider>
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
                      value={dateDTE}
                      onChange={handleDateDTE}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>

                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Drawbar / Towbar Tongue</Divider>
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
                      value={dateDTT}
                      onChange={handleDateDTT}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>

                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Drawbar / Towbar Tongue</Divider>
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
                      label="Saddle Mounts "
                      inputFormat="MM/dd/yyyy"
                      value={dateSB}
                      onChange={handleDateSB}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>
              </FormControl>
            </Box>
            <Box mt={5} mb={4}>
              <Stack direction="row" spacing={2}>
                <Box sx={{ width: "100%" }}>
                  <Link to="/BreakSystem">
                    <Button
                      style={{ width: "100%" }}
                      variant="contained"
                      size="medium"
                      // onClick={setPageHandler}
                    >
                      BACK
                    </Button>
                  </Link>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Link to="/CouplingDevices">
                    <Button
                      style={{ width: "100%" }}
                      variant="contained"
                      size="medium"
                      // onClick={setPageHandler}
                    >
                      NEXT
                    </Button>
                  </Link>
                </Box>

                {/* <Button
                    style={{ width: "100%" }}
                    variant="contained"
                    size="medium"
                    onClick={setPageHandler}
                  >
                    NEXT
                  </Button> */}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CouplingDevices;
