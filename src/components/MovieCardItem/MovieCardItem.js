import React from 'react';
import {Link} from 'react-router-dom';
import './MovieCardItem.scss';
import {Card, Icon} from 'antd';
import {IMAGE_PATH} from '../../utils/tmdb-constants';

const MovieCardItem = ({data}) => {
    
    const {title, id, poster_path} = data;
    const {Meta} = Card;
    const poster = `${IMAGE_PATH}${poster_path}`;

    return (
        <Link to={`/movie/${id}`}>
            <Card 
                className = "movie-card-item"
                hoverable
                cover = {<img alt={title} src={poster}/>}
                actions = {[<Icon type="eye" key="eye"/>]}
            >
                <Meta title={title}/>

            </Card>
        </Link>
    );
}

export default MovieCardItem;
