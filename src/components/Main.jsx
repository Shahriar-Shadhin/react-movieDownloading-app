import { React, useState } from 'react'
import Movie from './Movie';
const Main = () => {
   const [search, setSearch] = useState('');
   const [movies, setMovies] = useState([]);


   const updateSearch = e => {
      setSearch(e.target.value);
   }

   const getSearch = (e) => {
      e.preventDefault();
      getMovies();
      setSearch('');
   }

   const getMovies = async () => {

      const api = `https://www.omdbapi.com/?apikey=8f1ad92b&s=${search}`;
      fetch(api)
         .then(data => data.json())
         .then(data => {
            setMovies([...data.Search]);

         })
   }

   return (
      <section className="text-center d-flex flex-column align-items-center align-content-center">
         <h1>Download YTS YIFY movies</h1>
         <h3 className="mt-3">Wellcome to the website. Here you can browse and download YIFY movies in HD quality</h3>
         <form onSubmit={getSearch}>
            <div className="input-group text-center align-content-center align-items-center mt-5 p-2">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Quick search"
                  aria-label="movie name"
                  aria-describedby="basic-addon2"
                  value={search}
                  onChange={updateSearch}
               />
               <div className="input-group-append">
                  <button className="btn btn-outline-light" type="submit">Search</button>
               </div>
            </div>
         </form>
         <div className="container">
            <div id="movies" className="row">


               {

                  movies.map(movie => (

                     <Movie
                        key={movie.imdbID}
                        imdbID={movie.imdbID}
                        Poster={movie.Poster}
                        Title={movie.Title}
                        Year={movie.Year}

                     />
                  ))
               }

            </div>

         </div>


      </section>
   )
}

export default Main
