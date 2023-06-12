import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTllMDc3MWQ1MGY2ZjBjYWNhZDk0MDk1MWRiMmI2MSIsInN1YiI6IjY0N2MzODg3ZTMyM2YzMDBjNDJhNWE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuF0iMImgdLcfO_LlB_t43NuUW1bjDcFVJ1WoXKXVQ4',
      },
    };
    const API_KEY = '619e0771d50f6f0cacad940951db2b61';
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(({ results }) => {
        setData(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {data.map((item) => (
            <li key={item.id}>
            <Link to={`movies/${item.id}`}>
              {item.title}
            </Link>
            </li>
        ))}
      </ul>
    </>
  );
};
export default Home