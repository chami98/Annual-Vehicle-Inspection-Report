import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";

const Title = ({ TitleName }) => {
  return (
    <Box sx={{marginTop:"35vh",textAlign:'center'}}>
      <Typography variant="h2" component="h4">
        {TitleName}
      </Typography>
    </Box>
  );
};

export default Title;
