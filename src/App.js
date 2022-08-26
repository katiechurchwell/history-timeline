import React, { useState, useEffect } from "react";
import { regexFormat, categorizeByCountry } from "./utils/helpers";
import Timeline from "./components/Timeline";
import DropdownMenu from "./components/DropdownMenu";
import "./App.css";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [century, setCentury] = React.useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // fetch data
      const res = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=parse&page=${century}_century&prop=wikitext&section=1&format=json&formatversion=2&origin=*`
      );
      //destructure response
      const responseParse = res.data.parse.wikitext;
      //apply regex filters
      const sanitizedData = regexFormat(responseParse);
      //add country region property
      const categorizedData = categorizeByCountry(sanitizedData);
      //apply to state
      setData(categorizedData);
      setLoading(false);
    };
    fetchData();
  }, [century]);

  return (
    <>
      <DropdownMenu century={century} setCentury={setCentury} />
      <Timeline timelineData={data} />
    </>
  );
};

export default App;
