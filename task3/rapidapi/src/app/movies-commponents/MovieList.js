import React, { useState,useEffect } from 'react';
import HeadingElement from './common/HeadingElement';
import SearchBox from './SearchBox';
import MovieCard from './MovieCard';
//import DropdownMenu from './common/DropdownMenu'

const MovieList = () =>{
    //search movies by name
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('Spiderman')
    const getMovieRequest = async ()=> {
        const url = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchValue}?exact=true`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1d9042b945msh842ee46fe99b9fdp1d971djsnb7aa733d278d',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            if (result.results) {
                setMovies(result.results)
              }
        } catch (error) {
            console.error(error);
        }
        
    }
    useEffect(() => {
        getMovieRequest(searchValue)
      }, [searchValue])

    return(
        <div>
            <div className="">
                <div className="ui secondary pointing menu heading">
                    <div>
                    <HeadingElement heading="Movies" />
                    </div>
                    <div className="">
                    <SearchBox
                        className='ui search'
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                    </div>
                    <div>
                        
                    </div>
                    
                </div>
                <div style={{padding:"10px"}}>
                    <MovieCard
                        movies={movies}
                    /> 
                </div>
            </div>
        </div>
    )

}
export default MovieList;