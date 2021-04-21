import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const Details = () => {
   useEffect(() => {
      getMovies();
   }, []);

   let prams = useParams();
   const api = `https://yts.mx/api/v2/list_movies.json?query_term=${prams.id}`;
   const [movie, setMovie] = useState([]);
   const [loading, setLoading] = useState('true');


   const getMovies = async () => {
      console.log(api);
      fetch(api)
         .then(
            response => response.json(),
            reject => console.log('Error: ', reject)
         )
         .then(data => {
            setMovie(data)
            setLoading('false');
            console.log(movie);
         });
   }




   if (loading === 'true') {
      return (
         <h1>No movies founded to download</h1>
      )
   }
   else {
      return (
         <div className="container">
            <div id="movie" className="well">
               <div className="row">
                  <div className="col-md-4">
                     <img src={movie.data.movies[0].large_cover_image} alt="cover" className="cover" />
                  </div>
                  <div className="col-md-8">
                     <h2>{movie.data.movies[0].title}</h2>
                     <ul className="list-group">
                        <li className="list-group-item"><strong>Genre:</strong> {movie.data.movies[0].genres.map(item => `${item} `)}</li>
                        <li className="list-group-item"><strong>Released:</strong> {movie.data.movies[0].year}</li>
                        <li className="list-group-item"><strong>Rated:</strong> {movie.data.movies[0].rating}</li>
                        <li className="list-group-item"><strong>IMDB Code:</strong> {movie.data.movies[0].imdb_code}</li>
                        <li className="list-group-item"><strong>Quality:</strong> {movie.data.movies[0].torrents[0].quality}</li>
                        <li className="list-group-item"><strong>Size:</strong> {movie.data.movies[0].torrents[0].size}</li>
                        <li className="list-group-item"><a href={movie.data.movies[0].torrents[0].url} class="btn btn-primary">Download Torrent</a></li>

                     </ul>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="well p-2">
                  <h3>Summary</h3>
                  {movie.data.movies[0].summary}
                  <hr />
                  <div className="col">
                     <a href={movie.data.movies[0].url} target="_blank" rel="noreferrer" class="btn btn-success">View More</a>
                     <a href="/" className="btn btn-primary">Go To Home</a>

                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Details
