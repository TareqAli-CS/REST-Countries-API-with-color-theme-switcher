import React, { createContext, useState, useContext } from "react";

const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        searchQuery,
        setSearchQuery,
        selectedRegion,
        setSelectedRegion,
      }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountryContext() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }
  return context;
}
