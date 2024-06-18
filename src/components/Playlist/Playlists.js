import React from "react";
import Styles from './Playlist.module.css'
import Tracklist from "../TrackList/TrackList";

export default function Playlist(props) {
  return (
    <div className={Styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      <Tracklist userSearchResults={props.playlistTracks} />
      <button className={Styles.Playlist_save}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}