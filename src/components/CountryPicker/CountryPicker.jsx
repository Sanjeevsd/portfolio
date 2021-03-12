import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../Api";
const CountryPicker = ({ handelCountryChanges }) => {
  const [fetchedCountries, setFetchedCountiries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountiries(await fetchCountries());
    };
    fetchApi();
  }, [setFetchedCountiries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handelCountryChanges(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
