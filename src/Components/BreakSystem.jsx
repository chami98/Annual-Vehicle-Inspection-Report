import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";

export default function BreakSystem({ setPage }) {
  const [value, setValue] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateSB, setDateSB] = React.useState(new Date("2022-07-18T21:11:54"));
  const [datePBS, setDatePBS] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateBDR, setDateBDR] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateBH, setDateBH] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateBT, setDateBT] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateLPWD, setDateLPWD] = React.useState(
    new Date("2022-07-18T21:11:54")
  );
  const [dateTPV, setDateTPV] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateAC, setDateAC] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateEB, setDateEB] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateHB, setDateHB] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateVS, setDateVS] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateABS, setDateABS] = React.useState(new Date("2022-07-18T21:11:54"));
  const [dateABA, setDateABA] = React.useState(new Date("2022-07-18T21:11:54"));

  const handleDate = (newValue) => {
    setValue(newValue);
  };

  const handleDateSB = (newValue) => {
    setDateSB(newValue);
  };

  const handleDatePBS = (newValue) => {
    setDatePBS(newValue);
  };

  const handleDateBDR = (newValue) => {
    setDateBDR(newValue);
  };

  const handleDateBH = (newValue) => {
    setDateBH(newValue);
  };

  const handleDateBT = (newValue) => {
    setDateBT(newValue);
  };

  const handleDateLPWD = (newValue) => {
    setDateLPWD(newValue);
  };

  const handleDateTPV = (newValue) => {
    setDateTPV(newValue);
  };

  const handleDateAC = (newValue) => {
    setDateAC(newValue);
  };

  const handleDateEB = (newValue) => {
    setDateEB(newValue);
  };

  const handleDateHB = (newValue) => {
    setDateHB(newValue);
  };

  const handleDateVS = (newValue) => {
    setDateVS(newValue);
  };

  const handleDateABS = (newValue) => {
    setDateABS(newValue);
  };

  const handleDateABA = (newValue) => {
    setDateABA(newValue);
  };

  const setPageHandler = () => {
    setPage(1);
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        // minHeight="100vh"
        sx={{ width: "100%" }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
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
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
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
                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left">Parking Brake System</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={datePBS}
                        onChange={handleDatePBS}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>
                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Brake Drums or Rotors</Divider>
                  </Box>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateBDR}
                        onChange={handleDateBDR}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>
                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Brake Horse</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateBH}
                        onChange={handleDateBH}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>
                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Brake Tubing</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateBT}
                        onChange={handleDateBT}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>
                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left">
                      {" "}
                      Low Pressure Warning Device
                    </Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateLPWD}
                        onChange={handleDateLPWD}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>

                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left">
                      {" "}
                      Tractor Protection Valve
                    </Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateTPV}
                        onChange={handleDateTPV}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>
                </FormControl>
              </Box>

              {/* </Stack> */}
            </CardContent>
          </Card>

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
                // minHeight="100vh"
                sx={{ width: "100%" }}
              >
                <FormControl>
                  <Stack direction="row" spacing={2}></Stack>

                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Air Compressor</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateAC}
                        onChange={handleDateAC}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>

                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Electric Brakes</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateEB}
                        onChange={handleDateEB}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>

                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Hydraulic Brakes</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateHB}
                        onChange={handleDateHB}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>

                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Vacuum System</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateVS}
                        onChange={handleDateVS}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>

                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left"> Anti Lock Brake System</Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateABS}
                        onChange={handleDateABS}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>

                  <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                    <Divider textAlign="left">
                      {" "}
                      Automatic Brake Adjusters
                    </Divider>
                  </Box>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Ok"
                      control={<Radio />}
                      label="Ok"
                    />
                    <FormControlLabel
                      value="Needs Repair"
                      control={<Radio />}
                      label="Needs Repair"
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="Repaired Date "
                        inputFormat="MM/dd/yyyy"
                        value={dateABA}
                        onChange={handleDateABA}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </RadioGroup>
                </FormControl>
              </Box>

              {/* </Stack> */}
              <Box mt={5} mb={4}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ width: "100%" }}>
                    <Link to="/">
                      <Button
                        style={{ width: "100%" }}
                        variant="contained"
                        size="medium"
                        onClick={setPageHandler}
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
                        onClick={setPageHandler}
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
        </Stack>
      </Box>
    </Container>
  );
}
