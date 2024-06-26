import React from "react";
import Styles from './TrackList.module.css'
import Track from '../Track/Track'

export default function Tracklist (props) {
    return (
        <div className={Styles.Tracklist}>
          {props.userSearchResults.map(track => {
            return <Track track={track} key={track.id} isRemoval={props.isRemoval} onAdd={props.onAdd} />
          })}
      </div>
    );
}