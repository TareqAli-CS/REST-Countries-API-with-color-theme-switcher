import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { ArrayOfRegions } from "../Data/constant";
import Countries from "../Components/Countries";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = ArrayOfRegions;
  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value.length >= 3) {
      setSearchQuery(value);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <>
      <Stack
        direction="column"
        flexWrap="wrap"
        spacing={2}
        sx={{
          width: "95%",
          margin: "auto",
          p: 2,
          minHeight: "100vh",
          height: "auto",
        }}>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            color="primary"
            defaultValue={searchQuery}
            // value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <FormControl variant="outlined" sx={{ width: "200px" }}>
            <InputLabel id="region">Select an option</InputLabel>
            <Select
              labelId="region"
              id="region"
              value={selectedRegion}
              label="region"
              onChange={(e) => {
                setSelectedRegion(e.target.value);
              }}>
              {regions.map((region, index) => (
                <MenuItem key={index} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Countries searchQuery={searchQuery} selectedRegion={selectedRegion} />
      </Stack>
    </>
  );
}
