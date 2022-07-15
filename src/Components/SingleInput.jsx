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
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Link } from "react-router-dom";

export default function SingleInput({ task }) {
  const [dateSB, setDateSB] = React.useState(new Date("2022-07-18T21:11:54"));

  const handleDateSB = (newValue) => {
    setDateSB(newValue);
  };

  const { name } = task;


  return (
    <Grid container item xs={12} md={6} style={{ height : '90px', padding: '10px', paddingLeft: '20px',}}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          title="sadfdsaf"
        >
          <FormControlLabel
            value="Ok"
            control={<Radio />}
            label={<Typography variant="body2">Ok</Typography>}
          />
          <FormControlLabel
            value="Needs Repair"
            control={<Radio />}
            label={<Typography variant="body2">Needs Repair</Typography>}
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
          <Typography variant="subtitle1"
            style={{
              fontWeight:'bold',
              fontStyle:'italic',
              color:'black',
              textAlign: 'center',
              lineHeight : '50px',
              marginLeft : '10px'
            }}
        >{name}</Typography>
        </RadioGroup>
        
      </FormControl>
    </Grid>
  );
}
