import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    console.log(this.state)
    return (
     <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}
  
export default App;
