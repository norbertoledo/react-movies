import React from 'react';
import './MovieSlider.scss';
import {Carousel, Button} from 'antd';
import {Link} from 'react-router-dom';
import {IMAGE_PATH} from '../../utils/tmdb-constants';

export default function MovieSlider ({data}) {

    return (
        <Carousel autoplay className="movie-slider">

            {data.results.map(movie=>(
                
                <Movie key={movie.id} movie={movie}/>
            ))}

        </Carousel>
    );
    
}

function Movie({movie}){
    const {id, backdrop_path, title, overview} = movie;
    return (
        <div 
            className="movie-slider_movie" 
            style={{backgroundImage: `url('${IMAGE_PATH}${backdrop_path}')` }}
            >
            <div className="movie-slider_movie-info">
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type="primary">More...</Button>
                    </Link>
                </div>
            </div>
        </div>   
    )
}

