import React, {useState, useEffect} from 'react';
import {Row, Col} from 'antd';
import Spinner from '../../utils/Spinner';
import './MovieGrid.scss';
import MovieCardItem from '../MovieCardItem';
import Pagination from '../Pagination';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const MovieGrid = ({url, title, titleNoResults="No hay Resultados"}) => {
    
    const setScrollToTop = useScrollToTop(false);
    const [movieList, setMovieList] = useState({});
    const [page, setPage] = useState(1);

    const urlMovies = `${url}${page}`;

    const getMovies = async()=>{
        const res = await fetch(urlMovies);
        const data = await res.json();
        setMovieList( await data);
    }
    
    const handlePage = (page) => {
        setPage(page);
    }
  
    useEffect( ()=>{
        setScrollToTop(true);
        getMovies();
    },[page, url]);


    if( movieList.results && !movieList.results.length>0 ) {
        title = titleNoResults;
    };

    const list = movieList.results 
    ? <Row>  
        {
            movieList.results.map( movie =>(
                <Col 
                    xs={12}
                    md={8}
                    lg={6}
                    xxl={4} 
                    className="movie-grid_item"
                    key={movie.id}
                >
                    <MovieCardItem
                        data={movie}
                    />
                </Col>
            ))
        }
        <Col span={24}>
            <Pagination
                currentPage={movieList.page}
                totalItems={movieList.total_results}
                pageSize={20}
                handlePage={handlePage}
            />
        </Col>
      </Row>
    : <Spinner/>;

    return (
        <Row>
            <Col span={24} className="movie-grid">
                <h1 className="movie-grid_title">
                    {title}
                </h1>
            </Col>

            <Col span={24}>
                {list}
            </Col>

        </Row>
    );
}

export default MovieGrid;
