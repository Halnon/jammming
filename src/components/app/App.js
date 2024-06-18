import React, {useState} from 'react';
import Styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlists.js';

export default function App () {

  const [searchResults, setSearchResults] = useState([
    {
      name: 'example track name 1', 
      artist: 'example artist name 1', 
      album: 'example album name 1',
      id: 1
    },
    {
      name: 'example track name 2', 
      artist: 'example artist name 2', 
      album: 'example album name 2',
      id: 1
    }]
  );

  return (
    <div>
      <h1>
        Ja<span className={Styles.highlight}>mmm</span>ing
      </h1>
    <div className={Styles.App}>
      <SearchBar />
      
      <div className={Styles.App_playlist}>
        <SearchResults userSearchResults={searchResults}/>
        <Playlist />
      </div>
    </div>
  </div>
  );
}