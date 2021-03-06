import React, { Component } from 'react';
import './App.css';
import MovieHeader from './components/movieheader';
import MovieList from './components/movielist';
import Movie from './components/movie';
import Authentication from './components/authentication';
import Register from './components/register';
import {HashRouter,Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './stores/store'

//add routing configuration
class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                <HashRouter>
                    <div>
                        <MovieHeader />
                        <Route exact path="/" render={()=><MovieList />}/>
                        <Route exact path="/movies" render={()=><MovieList />}/>
                        <Route exact path="/movies/:movieId" render={()=><Movie />}/>
                        <Route path="/signin" render={()=><Authentication />}/>
                        <Route path="/signup" render={()=><Register />}/>
                    </div>
                </HashRouter>
                </Provider>
            </div>
        );
    }
}

export default App;