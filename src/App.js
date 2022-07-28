import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await axios.get(
        "https://en.wikipedia.org/w/api.php?action=parse&page=17th_century&prop=wikitext&section=1&format=json&formatversion=2&origin=*"
      );
      setData(res.data.parse.wikitext.split("*"));
      setLoading(false);
    };

    fetchData();
  }, [])

  return <>  
       {data.map((item, i) => (
          <li
            key={i}
          > {item} </li>
        ))}
  </>;
};

export default App;
