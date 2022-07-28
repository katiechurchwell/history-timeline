import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
  const fetchData = async () => {
  setLoading(true);
  const res = await axios.get('https://en.wikipedia.org/api/rest_v1/page/html/17th_century');
  setData(res.data);
  setLoading(false);
  };

fetchData();
}, []);
  
  return (
    <div className="content" dangerouslySetInnerHTML={{__html: data}}></div>
  );
}

export default App;
