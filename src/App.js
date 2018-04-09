import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieHeader from './components/movieheader';
import MovieList from './components/movielist';
import Movie from './components/movie';
import {HashRouter,Route} from 'react-router-dom';
import './App.css';

class App extends Component {
    state = {title: null};

    handleOnTitleChange = (e) => {
        this.setState({
            title: e
        });
    }

  render() {
    return (
      <div className="App">
          <HashRouter>
              <div>
                 <MovieHeader subTitle={this.state.title}/>
                  <Route exact path="/" render={()=><MovieList onTitleChange={this.handleOnTitleChange} />}/>
                  <Route path="/movielist" render={()=><MovieList onTitleChange={this.handleOnTitleChange} />}/>
                  <Route path="/movie" render={()=><Movie onTitleChange={this.handleOnTitleChange}/>}/>
              </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
