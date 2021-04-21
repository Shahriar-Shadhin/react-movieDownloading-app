import { React, useState, useEffect } from 'react'
import Movie from './Movie'

const Latest = () => {
   const api = "https://yts.mx/api/v2/list_movies.json?sort_by=year&order_by=desc";
   const [movie, setMovie] = useState([]);
   const [loading, setLoading] = useState(true);


   useEffect(() => {
      getMovies();
   }, []);

   const getMovies = async () => {
      console.log(api);
      fetch(api)
         .then(
            response => response.json(),
            reject => console.log('Error: ', reject)
         )
         .then(data => {
            console.log(data.data.movies);
            setMovie(data.data.movies)
            setLoading(false);

            // console.log(movie);
         });
   }

   if (loading === true) {
      return (
         <h1>Loading...</h1>
      )
   }
   else {
      return (
         <div className="row">
            <h2 className="col-12">Popular Movies</h2>
            {
               movie.map(mo => (
                  <Movie
                     key={mo.imdb_code}
                     rating={mo.rating}
                     imdbID={mo.imdb_code}
                     Poster={mo.medium_cover_image}
                     Title={mo.title}
                     Year={mo.year}
                  />
               ))
            }
         </div>
      )
   }
}

export default Latest
