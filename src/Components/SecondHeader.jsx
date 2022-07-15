import React, { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Link, Outlet } from "react-router-dom";

const SecondHeader = ({ setPage }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [value, setValue] = React.useState(new Date("2022-08-18T21:11:54"));

  const setPageHandler = () => {
    setPage(2);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="20vh"

      // minHeight="50vh"
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
            Details
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField
              id="outlined-basic"
              label="Motor Carrier Operator"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Inspector's Name"
              variant="outlined"
            />

            <TextField id="outlined-basic" label="Address" variant="outlined" />
          </Stack>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="This Inspector meets the qualification requirement in section 396.19"
            />
          </FormGroup>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField id="outlined-basic" label="City" variant="outlined" />
            <TextField id="outlined-basic" label="State" variant="outlined" />

            <TextField
              id="outlined-basic"
              label="Zip Code"
              variant="outlined"
            />
          </Stack>
          <Box display="flex" justifyContent="center" alignItems="center"></Box>
          <Typography mt={1} sx={{ fontSize: 17 }} color="text.secondary">
            Vehicle Identification
          </Typography>
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                {" "}
                <FormControlLabel
                  value="LIC Plate No"
                  control={<Radio />}
                  label="LIC Plate No"
                />
                <FormControlLabel value="VIC" control={<Radio />} label="VIC" />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </Stack>
            </RadioGroup>
          </FormControl>

          <Typography mt={1} sx={{ fontSize: 17 }} color="text.secondary">
            Vehicle Type
          </Typography>
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              //   defaultValue="female"
              name="radio-buttons-group"
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                {" "}
                <FormControlLabel
                  value="Tractor"
                  control={<Radio />}
                  label="Tractor"
                />
                <FormControlLabel
                  value="Trailer"
                  control={<Radio />}
                  label="Trailer"
                />
                <FormControlLabel
                  value="Truck"
                  control={<Radio />}
                  label="Truck"
                />
                <FormControlLabel value="Bus" control={<Radio />} label="Bus" />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </Stack>
            </RadioGroup>
          </FormControl>
          <Stack
            direction="column"
            // justifyContent="center"
            // alignItems="center"
            spacing={2}
          >
            <Typography mt={1} sx={{ fontSize: 17 }} color="text.secondary">
              Inspection Agency / Location (Optional)
            </Typography>
            <TextField
              id="outlined-basic"
              label="Inspection Agency"
              variant="outlined"
            />
            <Link to="/BreakSystem">
              <Button
                style={{ width: "100%" }}
                variant="contained"
                size="medium"
                onClick={setPageHandler}
              >
                NEXT
              </Button>
            </Link>
          </Stack>
        </CardContent>
      </Card>
      <Outlet />
    </Box>
  );
};

export default SecondHeader;
