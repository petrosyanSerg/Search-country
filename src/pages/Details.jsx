import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import Info from "../components/Info";

export default function Details() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info navigate={navigate} {...country} />}
    </div>
  );
}
