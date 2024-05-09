import React from 'react';
import Styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';

export default function App () {
  return (
    <div>
      <h1>
        Ja<span className={Styles.highlight}>mmm</span>ing
      </h1>
    <div className={Styles.App}>
      <SearchBar />
      
      <div className={Styles.App_playlist}>
        <SearchResults />
        {/* <!-- Add a Playlist component --> */}
      </div>
    </div>
  </div>
  );
}