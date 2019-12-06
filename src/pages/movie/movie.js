import React, {Fragment, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Row, Col, Button} from 'antd';
import moment from 'moment';
import useFetch from '../../hooks/useFetch';
import {API_URL, API_KEY, LANG_ES, IMAGE_PATH, MOVIE} from '../../utils/tmdb-constants';
import Spinner from '../../utils/Spinner';
import VideoModal from '../../components/VideoModal';
import './movie.scss';

const Movie = () => {
    
    const {id} = useParams();
    const urlMovieData = `${API_URL}${MOVIE}/${id}${API_KEY}${LANG_ES}`;
    const movieData = useFetch(urlMovieData).result;

    console.log(movieData);
    
    if(movieData.isLoading) return <Spinner/>
    
return <RenderMovie data={movieData.data}/>;
}

export default Movie;

const RenderMovie = ({data}) => {
    const { backdrop_path, poster_path} = data;
    const backdrop = `${IMAGE_PATH}${backdrop_path}`;

    return(
        <div 
            className="movie"
            style={{ backgroundImage: `url('${backdrop}')`}}
        >
            <div className="movie_blend"/>
            <Row>
                <Col span={8} offset={2} className="movie_poster">
                    <MoviePoster posterPath={poster_path}/>
                </Col>
                <Col span={10} offset={1} className="movie_info">
                    <MovieInfo data={data}/>
                </Col>
            </Row>
        </div>
    )
}

const MoviePoster = ({posterPath}) => {
    const poster = `${IMAGE_PATH}${posterPath}`;

    return(
        <div style={{ backgroundImage: `url('${poster}')`}} />
    )
}

const MovieInfo = ({data}) => {
    const {id, title, release_date, overview, genres} = data;

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const urlVideoTrailer = `${API_URL}${MOVIE}/${id}/videos${API_KEY}${LANG_ES}`;
    const videoTrailer = useFetch(urlVideoTrailer).result;
    let videoTrailerData;

    console.log("VIDEO", videoTrailer);

    const handleModal = () => setIsModalVisible(!isModalVisible);
    
    const renderVideoModal = () => {

        if(videoTrailer.data){
            videoTrailerData = videoTrailer.data.results;
            if(videoTrailerData.length > 0){
                return(
    
                    <Fragment>
                        <Button icon="play-circle" onClick={handleModal}>
                            ver trailer
                        </Button>
                        <VideoModal
                            videoKey= {videoTrailerData[0].key}
                            videoPlatform= {videoTrailerData[0].site}
                            isOpen={isModalVisible}
                            close={handleModal}
                            />
                    </Fragment>
                );
            }else{
                return null;
            }
        }
    }

    return(
        <Fragment>
            <div className="movie_info-header">
                <h1>
                    {title}
                    <span>{moment(release_date, 'YYYY-MM-DD').format("YYYY")}</span>
                </h1>
                {renderVideoModal()}
            </div>
            <div className="movie_info-content">
                <h3>Sinopsis</h3>
                <p>{overview}</p>
                <h3>Géneros</h3>
                <ul>
                    {genres.map(genre=>(
                        <li
                            key={genre.id}
                        >{genre.name}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}