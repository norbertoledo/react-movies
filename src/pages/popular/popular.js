import React from 'react';
import {API_URL, API_KEY, LANG_ES, POPULAR, PAGE} from '../../utils/tmdb-constants';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import './popular.scss';

const Popular = () => {

    const urlPopular = `${API_URL}${POPULAR}${API_KEY}${LANG_ES}${PAGE}`;
    
    return(
        <div className="popular">
            <MovieGrid
                url={urlPopular}
                title="Películas Populares"            
            />
        </div>
    )
}

export default Popular;
