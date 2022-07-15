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

export default function BreakSystem({ setPage }) {
  const [value, setValue] = React.useState(new Date("2022-08-18T21:11:54"));

  const handleDate = (newValue) => {
    setValue(newValue);
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
        minHeight="100vh"
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>

                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Tractor Protection Valve</Divider>
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
                      value={value}
                      onChange={handleDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>

                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Air Compressor</Divider>
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
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
                      value={value}
                      onChange={handleDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>

                <Box mb={2} mt={1} sx={{ fontSize: "18px" }}>
                  <Divider textAlign="left"> Automatic Brake Adjusters</Divider>
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
                      value={value}
                      onChange={handleDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </RadioGroup>
              </FormControl>
            </Box>

            {/* </Stack> */}
          </CardContent>

          <Stack direction="row" spacing={2}>
            <Button
              style={{ width: "100%" }}
              variant="contained"
              size="medium"
              onClick={setPageHandler}
            >
              BACK
            </Button>
            <Button
              style={{ width: "100%" }}
              variant="contained"
              size="medium"
              onClick={setPageHandler}
            >
              NEXT
            </Button>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
}
