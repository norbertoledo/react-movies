import React from 'react';
import {List, Button, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import "./MovieList.scss";
import {IMAGE_PATH} from '../../utils/tmdb-constants';

export default function MovieList({data, title}) {

   // const {, isLoading, error} = data;
    console.log("List", data.results);
    return (
        <List
            className="movie-list"
            size="default"
            header={<h2>{title}</h2>}
            bordered
            dataSource={data.results}
            renderItem={movie=> <RenderMovie movie={movie}/>}
        />
            
        
    )
}

function RenderMovie(props){
    const{ movie: {id, title, poster_path} } = props;

    const urlPoster = `${IMAGE_PATH}${poster_path}`;
    return (
        <List.Item className="movie-list_movie">
            <List.Item.Meta
                avatar = {<Avatar src={urlPoster}/>}
                title = {<Link to={`/movie/${id}`}>{title}</Link>}
            />
            <Link to={`/movie/${id}`}>
                <Button type="primary" shape="circle" icon="right"></Button>
            </Link>
        </List.Item>
    )
}

