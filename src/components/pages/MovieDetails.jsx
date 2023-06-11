import React, { useState, useEffect, useRef, Suspense  } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies') 
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTllMDc3MWQ1MGY2ZjBjYWNhZDk0MDk1MWRiMmI2MSIsInN1YiI6IjY0N2MzODg3ZTMyM2YzMDBjNDJhNWE2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuF0iMImgdLcfO_LlB_t43NuUW1bjDcFVJ1WoXKXVQ4',
      },
    };
    const API_KEY = '619e0771d50f6f0cacad940951db2b61';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkLocationRef.current}> Go back </Link>
      {data && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt={data.title} />
          <h2>{data.title} ({data.release_date.slice(0, 4)})</h2>
          <p>User Score: {Math.round(data.vote_average * 100) / 10}%</p>
          <h3>Overview:</h3>
          <p>{data.overview}</p>
          <h3>Genres</h3>
          <ul>
            {data.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <p>additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails
