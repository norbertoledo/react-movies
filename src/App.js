import React from 'react';
// LAYOUT
import {Layout} from 'antd';
// ROUTER
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// PAGES
import Home from './pages/home/';
import NewMovies from './pages/new-movies/';
import Popular from './pages/popular/';
import Search from './pages/search/';
import Movie from './pages/movie/';
import Error404 from './pages/error404/';

// COMPONENTS
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// CSS
import './App.scss';

export default function App() {
  
  const {Header, Content} = Layout;

  return (
    <Layout>
      <Router>
        <Header className="App_header">
          <Navigation/>
        </Header>
        <Content>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/new-movies'><NewMovies/></Route>
            <Route exact path='/popular'><Popular/></Route>
            <Route exact path='/search'><Search/></Route>
            <Route exact path='/movie/:id'><Movie/></Route>
            <Route exact path='*'><Error404/></Route>
          </Switch>
        </Content>
        <Footer/>   
      </Router>
    </Layout>
  );
}

