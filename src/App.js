import React, { useState, useEffect } from "react";
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
        "https://en.wikipedia.org/w/api.php?action=parse&page=17th_century&prop=wikitext&section=1&format=json&formatversion=2&origin=*"
      );

      // sanitize data
      //remove HTML tags and content
      const regexHTML=/(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)/g
      const wikitext = res.data.parse.wikitext.replace(regexHTML,'')

      // remove `{{ }}` and content
      // remove [[]]
      setData(wikitext.split("*"));
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
