import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Grid } from "@mui/material";
import {
  getAllCountries,
  getCountryByName,
  getCountryByRegion,
} from "../Data/endPoints";
import { useCountryContext } from "../Providers/CountryProvider"; // Import the context

export default function Countries() {
  const { countries, setCountries, searchQuery, selectedRegion } =
    useCountryContext(); // Use the context
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        let url = getAllCountries;

        if (searchQuery && searchQuery.length >= 3) {
          url = `${getCountryByName}/${searchQuery}`;
        } else if (selectedRegion) {
          if (selectedRegion === "All") url = getAllCountries;
          else url = `${getCountryByRegion}/${selectedRegion}`;
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

    if (countries.length === 0 || searchQuery || selectedRegion) {
      fetchData();
    }
  }, [searchQuery, selectedRegion, setCountries, countries.length]);

  return (
    <Grid container spacing={2} sx={{ minHeight: "100vh" }}>
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
