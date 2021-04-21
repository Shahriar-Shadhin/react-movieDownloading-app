import React from 'react'
import '../style.css'
import {
   Link
} from "react-router-dom";

const Movie = ({ rating, Title, Year, imdbID, Poster }) => {
   return (
      <div className="col-md-4 col-sm-6 col-lg-3">
         <div className="well text-center mt-2">
            <img src={Poster} alt="logo" />
            <h5>{Title}</h5>
            <h5>Year: {Year}</h5>
            {rating !== null ? <h6>Rating: {rating}</h6> : null}
            {/* <h5>{imdbID}</h5> */}
            <Link
               className='btn btn-primary'
               to={`${imdbID}/details`}
            >
               Movie Details
            </Link>

         </div>

      </div>


   )
}

export default Movie
