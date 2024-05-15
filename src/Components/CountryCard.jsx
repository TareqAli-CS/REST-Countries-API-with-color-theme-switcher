import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import readablePopulationNumber from "../Utils/readablePopulationNumber";
import { useTheme } from "@emotion/react";
import { Link, useNavigate } from "react-router-dom";

export default function CountryCard({ country }) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/country/${country.cca3}`);
      }}
      sx={{
        cursor: "pointer",
        width: 250,
        boxShadow:
          theme.palette.mode === "dark" ? theme.shadows[6] : theme.shadows[2],

        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow:
            theme.palette.mode === "dark" ? theme.shadows[7] : theme.shadows[3],
        },
      }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={country.flags.svg}
      />
      <CardContent>
        {country.name.common.length > 20 ? (
          <Typography variant="h7" component="div">
            {country.name.common}
          </Typography>
        ) : (
          <Typography gutterBottom variant="h5" component="div">
            {country.name.common}
          </Typography>
        )}

        <Typography variant="body2" color="text.secondary">
          Population: {readablePopulationNumber(country.population)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region: {country.region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {country.capital?.[0]}
        </Typography>
      </CardContent>
    </Card>
  );
}
