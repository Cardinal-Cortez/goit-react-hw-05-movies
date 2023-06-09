import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';

// ...импорт React и других необходимых модулей

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const API_KEY = '619e0771d50f6f0cacad940951db2b61';
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <h3>Cast:</h3>
    
      {data && (
        <ul>
          {data.cast.map((item) => (
            <li key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt={item.original_name} />
              <p>Actor: {item.original_name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
