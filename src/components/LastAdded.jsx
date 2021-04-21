import { React, useState, useEffect } from 'react'
import Movie from './Movie'

const LastAdded = () => {
   const api = "https://yts.mx/api/v2/list_movies.json?sort_by=date_added&order_by=desc";
   const [movie, setMovie] = useState([]);
   const [loading, setLoading] = useState(true);
   // const [currentPage, setCurrentPage] = useState(1);
   // const [moviesPerPage, setMoviesPerPage] = useState(8);

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
   // const indexOfLastMovie = currentPage * moviesPerPage;
   // const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
   // const currentMovies = movie.slice(indexOfFirstMovie, indexOfLastMovie);

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

export default LastAdded
