import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  FormGroup,
  Grid,
  IconButton,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";
import SingleInput from "./SingleInput";
import VehicleHistoryReordDataCapture from "./VehicleHistoryReordDataCapture";
import VehicleDetailsCapture from "./VehicleDetailsCapture";

const keyToComponent = {
  'Vehicle-History-Record' : <VehicleHistoryReordDataCapture />,
  'Vehicle-Details' : <VehicleDetailsCapture />
}

export default function CaptureData() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return <>
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIco /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Annul Vehicle Inspection
          </Typography>
          
        </Toolbar>
      </AppBar>
  <Grid container spacing={1} margin={2}>
    
    <Grid container item xs={12} sm={6} md={3} style={{
      borderRight:'1px solid #888',
      overflow : 'scroll',
      maxHeight : '95vh',
      // marginRight: '20px'
    }}>
    <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}
          onClick={() => setActiveStep(index)}
          style={{
            cursor:'pointer'
          }}>
            <StepLabel
              optional={
                step.description ? (
                  <Typography variant="caption">{step.description}</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>
    <Grid
    item xs={12} sm={6} md={9}
     style={{
      borderRight:'1px solid #888',
      overflow : 'sc',
      maxHeight : '95vh',
      // marginRight: '20px'
    }}
    >

    <Grid container item xs={12}
    direction="column"
    >
      <Typography variant="h6" style={{
        paddingLeft : '20px',
        marginBottom : '20px',
      }}>
        {steps[activeStep].label}
      </Typography>
      {
        keyToComponent[steps[activeStep].key] ? keyToComponent[steps[activeStep].key] : steps[activeStep]?.tasks?.map( task => (
          <SingleInput task={task} />
        ))
      }

      <ButtonGroup disableElevation
      style={{
        paddingLeft : '20px',
        marginBottom : '20px',
      }}>
        { activeStep > 0 && <Button onClick={() => setActiveStep(activeStep - 1)}>Back</Button> }
        { activeStep < steps.length - 1 && <Button variant="contained" onClick={() => setActiveStep(activeStep + 1)}>Next</Button> }
      </ButtonGroup>
    </Grid>
    </Grid>

  </Grid>
  </>
}

const steps = [
  {
    label: 'Vehicle History Record',
    key : 'Vehicle-History-Record',
  },
  {
    label: 'Vehicle Details',
    key : 'Vehicle-Details',
  },
  {
    label: 'Break System',
    tasks: [
      { name: 'Service Brakes' },
      { name: 'Parking Break System' },
      { name: 'Break Drums or Rotors' },
    ]
  },
  {
    label: 'Coupling Devices',
    tasks: [
      { name: 'Fifth Wheels' },
      { name: 'Pintale Hooks' },
      { name: 'Drawer / Towbar Eye' },
    ],
  },
  {
    label: 'Exhaust system',
    tasks: [
      { name: 'Service Brakes' },
      { name: 'Parking Break System' },
      { name: 'Break Drums or Rotors' },
    ]
  },
  {
    label: 'Break System',
    tasks: [
      { name: 'Service Brakes' },
      { name: 'Parking Break System' },
      { name: 'Break Drums or Rotors' },
      { name: 'Break Hose' },
      { name: 'Break Tubing' },
      { name: 'Service Brakes' },
      { name: 'Parking Break System' },
      { name: 'Break Drums or Rotors' },
    ]
  },
  {
    label: 'Coupling Devices',
  },
  {
    label: 'Other',
  },
  {
    label: 'Break System',
    tasks: [
      { name: 'Service Brakes' },
      { name: 'Parking Break System' },
      { name: 'Break Drums or Rotors' },
      { name: 'Break Hose' },
      { name: 'Break Tubing' },
    ]
  },
  {
    label: 'Coupling Devices',
  },
  {
    label: 'Exhaust system',
  },
  {
    label: 'Break System',
    tasks: [
      { name: 'Service Brakes' },
      { name: 'Parking Break System' },
      { name: 'Break Drums or Rotors' },
      { name: 'Break Hose' },
      { name: 'Break Tubing' },
    ]
  },
  {
    label: 'Coupling Devices',
  },
  {
    label: 'Exhaust system',
  },
  {
    label: 'Break System',
    tasks: [
      { name: 'Service Brakes' },
      { name: 'Parking Break System' },
      { name: 'Break Drums or Rotors' },
      { name: 'Break Hose' },
      { name: 'Break Tubing' },
    ]
  },
  {
    label: 'Coupling Devices',
  },
  {
    label: 'Exhaust system',
  },
];