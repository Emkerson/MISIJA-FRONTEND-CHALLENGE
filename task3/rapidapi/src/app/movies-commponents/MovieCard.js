import React from "react";
import HeadingElement from "./common/HeadingElement";



const MovieCard = (props) => {
    
  return (
    <div className="ui three stackable cards">
      {props.movies.map((movie) => {
        return (
          <div key={movie.id} className="ui card">
            <img
              src={
                movie.primaryImage
                  ? movie.primaryImage.url
                  : "https://media.wired.com/photos/5b8999943667562d3024c321/master/w_2560%2Cc_limit/trash2-01.jpg"
              }
              alt="movie"
            />
            <HeadingElement heading={movie.titleText.text}/>
            <HeadingElement heading={movie.primaryImage ? movie.primaryImage.caption.plainText : ""} />
            <div> 
                {movie.releaseDate ? movie.releaseDate.day : "?"}. 
                {movie.releaseDate ? movie.releaseDate.month : "?"}.
                {movie.releaseDate ? movie.releaseDate.year : "?"}.
            </div>
            <div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MovieCard;