import React from "react";
import Styles from './Playlist.module.css'

export default function Playlist() {
  return (
    <div className={Styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <button className={Styles.Playlist_save}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}