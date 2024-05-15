import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Button,
} from "@mui/material";
import { getCountryByCode } from "../Data/endPoints";

export default function CountryProfile() {
  const { cca3 } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [borders, setBorders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountry() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${cca3}`
        );
        const data = await response.json();
        setCountry(data[0]); // Assuming the API returns an array
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountry();
    return () => {
      setCountry(null);
    };
  }, [cca3]);

  useEffect(() => {
    async function fetchBorders() {
      if (!country || !country.borders) return;
      try {
        const borderCountries = await Promise.all(
          country.borders.map(async (border) => {
            const response = await fetch(`${getCountryByCode}/${border}`);
            const data = await response.json();
            return data[0];
          })
        );
        setBorders(borderCountries);
      } catch (error) {
        console.error("Failed to fetch border countries:", error);
      }
    }

    fetchBorders();
  }, [country]);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!country) {
    return (
      <Typography variant="h6" textAlign="center">
        Country not found
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: 2, minHeight: "100vh", height: "auto" }}>
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{ marginBottom: 2 }}>
        Back
      </Button>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={country.flags?.svg}
              alt={`${country.name.common} flag`}
              sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h4" component="div" gutterBottom>
                {country.name.common}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <strong>Capital:</strong> {country.capital?.[0]}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Region:</strong> {country.region}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Subregion:</strong> {country.subregion}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Population:</strong> {country.population}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Area:</strong> {country.area} km²
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    <strong>Timezones:</strong> {country.timezones.join(", ")}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Languages:</strong>{" "}
                    {Object.values(country.languages).join(", ")}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Currencies:</strong>{" "}
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Borders:</strong>{" "}
                    {country.borders?.length > 0
                      ? borders.map((border) => border.name.common).join(", ")
                      : "No borders"}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
