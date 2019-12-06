import React,{Fragment} from 'react';
import {API_URL, API_KEY, LANG_ES, NOW_PLAYING, PAGE} from '../../utils/tmdb-constants';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import './new-movies.scss';
const NewMovies = () => {
    
    const urlNewMovies = `${API_URL}${NOW_PLAYING}${API_KEY}${LANG_ES}${PAGE}`;
    
    return(
        <div className="new-movies">   
            <MovieGrid
                url={urlNewMovies}
                title="Últimos lanzamientos"            
            />
        </div>
    )
}

export default NewMovies;
