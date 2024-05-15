import React from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ArrayOfRegions } from "../Data/constant";
import Countries from "../Components/Countries";
import { useCountryContext } from "../Providers/CountryProvider"; // Import the context

export default function Home() {
  const { searchQuery, setSearchQuery, selectedRegion, setSelectedRegion } =
    useCountryContext(); // Use the context
  const regions = ArrayOfRegions;

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value); // Update search query
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value); // Update selected region
  };

  return (
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
          value={searchQuery} // Use value from context
          onChange={handleSearchChange} // Update context state
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
            value={selectedRegion} // Use value from context
            label="region"
            onChange={handleRegionChange} // Update context state
          >
            {regions.map((region, index) => (
              <MenuItem key={index} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Countries />
    </Stack>
  );
}
