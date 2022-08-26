import React, { useState, useEffect } from "react";
import { regexFormat } from "./utils/helpers";
import Timeline from "./components/Timeline";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // fetch data
      const res = await axios.get(
        "https://en.wikipedia.org/w/api.php?action=parse&page=14th_century&prop=wikitext&section=1&format=json&formatversion=2&origin=*"
      );

      const responseParse = res.data.parse.wikitext;
      setData(regexFormat(responseParse));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (<Timeline timelineData={data}/>);
};

export default App;