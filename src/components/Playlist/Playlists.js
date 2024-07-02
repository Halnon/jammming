import React from "react";
import Styles from './Playlist.module.css'
import Tracklist from "../TrackList/TrackList";

export default function Playlist(props) {

  function handleNameChange({ target }) {
    props.onNameChange(target.value);
  };

  return (
    <div className={Styles.Playlist}>
      <input 
        defaultValue={"New Playlist"} 
        onChange={handleNameChange} 
      />
      <Tracklist 
        userSearchResults={props.playlistTracks} 
        onRemove={props.onRemove} 
        isRemoval={true} 
      />
      <button 
        className={Styles.Playlist_save}
        onClick={props.onSave}
      >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}