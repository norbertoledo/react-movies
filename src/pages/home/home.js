import React,{Fragment} from 'react';
import useFetch from '../../hooks/useFetch';
import MovieSlider from '../../components/MovieSlider';
import {API_KEY, API_URL, LANG_ES, PAGE_1, NOW_PLAYING, POPULAR, TOP_RATED} from '../../utils/tmdb-constants';
import {Row, Col} from 'antd';
import MovieList from '../../components/MovieList';
import Spinner from '../../utils/Spinner';
import './home.scss';

const Home = () => {
   /*
    let dataQueries = {
        nowPlaying: null,
        popular: null,
        latest: null
    };

    const [queries, setQueries] = useState(dataQueries);
   */
    /*
    const [nowPlaying, setNowPlaying] = useState(null);
    const [popular, setPopular] = useState(null);
    const [latest, setLatest] = useState(null);
    */
    const urlNowPlaying = `${API_URL}${NOW_PLAYING}${API_KEY}${LANG_ES}${PAGE_1}`;
    const urlPopular = `${API_URL}${POPULAR}${API_KEY}${LANG_ES}${PAGE_1}`;
    const urlTopRated = `${API_URL}${TOP_RATED}${API_KEY}${LANG_ES}${PAGE_1}`;

    let nowPlaying, popular, topRated;
    let nowPlayingComponent, popularComponent, topRatedComponent;

    nowPlaying = useFetch(urlNowPlaying).result;
    //console.log("NOW", nowPlaying);
    popular = useFetch(urlPopular).result;
    //console.log("POPULAR", popular);
    topRated = useFetch(urlTopRated).result;
    //console.log("TOP", topRated);


    // Todas las consultas juntas. Repinta el componente cada vez que cambia el estado
  /*
    const getNowPlaying = async ()=>{
        const res = await fetch(urlNowPlaying);
        const data = await res.json();
        dataQueries = {...dataQueries, nowPlaying: await data}
        setQueries(dataQueries);
    }
    const getPopular = async ()=>{
        console.log("POPULAR");
        const res = await fetch(urlPopular);
        const data = await res.json();
        dataQueries = {...dataQueries, popular: await data}
        setQueries(dataQueries);
    }
    const getLatest = async ()=>{
        console.log("LATEST");
        const res = await fetch(urlLatest);
        const data = await res.json();
        dataQueries = {...dataQueries, latest: await data}
        setQueries(dataQueries);
    }
*/
    /*
    // Promesas encadenas. Cuando termina un fetch, llama al otro fetch.
    // Cuando todos terminan repinta el componente
    const getData = () => {
        fetch(urlNowPlaying)
        .then(res => res.json())
        .then(res => dataQueries = {...dataQueries, nowPlaying:res})
        .then(() => fetch(urlPopular))
        .then(res => res.json())
        .then(res => dataQueries = {...dataQueries, popular:res})
        .then(() => fetch(urlLatest))
        .then(res => res.json())
        .then(res => dataQueries = {...dataQueries, latest:res})
        .then(() => setQueries(dataQueries))
        .catch(e => console.log("ERROR"));
    }
    */

    /*
    // Mezcla con async / await
    // Cuando todos terminan repinta el componente
    const getData = ()=>{
        fetch(urlNowPlaying)
        .then(async(res)=>{
                const data = await res.json();
                dataQueries = {...dataQueries, nowPlaying: await data};
            }
        )
        .then(()=>fetch(urlPopular))
        .then(async(res)=>{
                const data = await res.json();
                dataQueries = {...dataQueries, popular: await data};
            }
        )
        .then(()=>fetch(urlLatest))
        .then(async(res)=>{
                const data = await res.json();
                dataQueries = {...dataQueries, latest: await data};
            }
        )
        .then(()=>setQueries(dataQueries))
        .catch(e=>{console.log("ERROR")})
    }
    */
/*
    useEffect(()=>{
        // getNowPlaying();
        // getPopular();
        // getLatest();
        //getData();
    },[]);
*/
    //console.log(dataQueries);
    //
    nowPlaying.error
    ? nowPlayingComponent = <h3>{nowPlaying.error.message}</h3>
    : nowPlaying.isLoading 
        ? nowPlayingComponent = <Spinner/> 
        : nowPlayingComponent = <MovieSlider data={nowPlaying.data}/>;
    
    popular.error
    ? popularComponent = <h3>{popular.error.message}</h3>
    : popular.isLoading 
        ? popularComponent = <Spinner/> 
        : popularComponent = <MovieList data={popular.data} title="Películas Populares"/>;
    
    topRated.error
    ? topRatedComponent = <h3>{topRated.error.message}</h3>
    : topRated.isLoading 
        ? topRatedComponent = <Spinner/> 
        : topRatedComponent = <MovieList data={topRated.data} title="Mejor Valoradas"/>;
    

    return (
        <Fragment>
           {nowPlayingComponent}
            <Row className="home">
                <Col span={12}>
                    {popularComponent}
                </Col>
                <Col span={12}>
                    {topRatedComponent}
                </Col>
            </Row>
        </Fragment>
    );
}

export default Home;
