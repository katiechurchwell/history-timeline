import "../App.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";

function DropdownMenu({ century, setCentury }) {
  //centuries drop-down

  const handleChange = (event) => {
    setCentury(event.target.value);
  };

  const centuries = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
  ];

  const centuryItems = centuries.map((century) => {
    return <MenuItem value={century}>{century}</MenuItem>;
  });

  return (
    <Container>
      <Box>
        <FormControl sx={{ m: 3, minWidth: 120 }}>
          <InputLabel>Century</InputLabel>
          <Select value={century} label="Century" onChange={handleChange}>
            {centuryItems}
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
}

export default DropdownMenu;
