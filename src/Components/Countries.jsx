import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Grid } from "@mui/material";
import {
  getAllCountries,
  getCountryByName,
  getCountryByRegion,
} from "../Data/endPoints";

export default function Countries({ searchQuery, selectedRegion }) {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        let url = getAllCountries;

        if (searchQuery) {
          url = `${getCountryByName}/${searchQuery}`;
        } else if (selectedRegion) {
          url = `${getCountryByRegion}/${selectedRegion}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchQuery, selectedRegion]);

  return (
    <Grid
      container
      spacing={2}
      // justifyContent="center"
      // alignItems="center"
      sx={{ minHeight: "100vh" }}>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        countries.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
            <CountryCard country={country} />
          </Grid>
        ))}
    </Grid>
  );
}
