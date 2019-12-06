import React,{useState, useEffect, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import {Row, Col, Input} from 'antd';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import { API_URL, API_KEY, SEARCH, LANG_ES, PAGE } from '../../utils/tmdb-constants';
import './search.scss';

const Search = (props) => {
    //console.log(props);
    const {location, history}= props;
    const [query, setQuery] = useState('');
    
    const urlSearchMovies = `${API_URL}${SEARCH}${API_KEY}${LANG_ES}&query=${query}${PAGE}`;

    const getQuery = () =>{
        const searchValue = queryString.parseUrl(location.search);
        const {q} = searchValue.query;
        //console.log("q",q);
        setQuery(q);
    }

    const handleInput = (e) =>{
        const urlParams = queryString.parse(location.search);
        urlParams.q = e.target.value;
        history.push(`?${queryString.stringify(urlParams)}`);
        //setQuery(e.target.value);
    }

    useEffect(()=>{
        getQuery();
    },[location.search]);

    //console.log(urlSearchMovies);
    const result = query
    ? 
    <MovieGrid
        url={urlSearchMovies}
        title={`Resultados de "${query}"`}
        titleNoResults={`No hay resultados para "${query}"`}            
    />
    : null;

    return (
        <div className="search">
            <Row>
                <Col span={12} offset={6} >
                    <h3 className="search_title">Busca tu película</h3>
                    <Input value={query} onChange={handleInput}/>
                </Col>
            </Row>
            {result}
        </div>   
    );
}

export default withRouter(Search);
