import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Controls from "../components/Controls/Controls";
import List from "../components/List";
import Card from "../components/Card";
import { ALL_COUNTRIES } from "../config";

export default function Homepage({ countries, setCountries }) {
  const [filtredCountries, setFiltredCountries] = useState(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => {
      setCountries(data);
      setFiltredCountries(data);
    });
  }, []);

  const handlerSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }
    if (search) {
      data = data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltredCountries(data);
  };

  const navigate = useNavigate();

  return (
    <>
      <Controls onSearch={handlerSearch} />
      <List>
        {filtredCountries.map((elem) => {
          const countryInfo = {
            img: elem.flags.png,
            name: elem.name,
            info: [
              {
                title: "Population",
                description: elem.population.toLocaleString(),
              },
              {
                title: "Region",
                description: elem.region,
              },
              {
                title: "Capital",
                description: elem.capital,
              },
            ],
          };
          return (
            <Card
              key={elem.name}
              onClick={() => {
                navigate(`/country/${elem.name}`);
              }}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
}
