import React from "react";
import Styles from './Track.module.css'

export default function Track (props) {
  function renderAction() {
    if (props.isRemoval) {
      return <button className={Styles.Track_action} onClick={passTrackToRemove}>-</button>
    } else {
      return <button className={Styles.Track_action} onClick={passTrack}>+</button>
    }
  }

  function passTrack() {
    props.onAdd(props.track);
  }

  function passTrackToRemove() {
    props.onRemove(props.track);
  }

  return (
    <div className={Styles.Track}>
      <div className={Styles.Track_information}>
        {<h3>{props.track.name}</h3>}
        {<p>{props.track.artist} | {props.track.album}</p>}
      </div>
      {/* <button class="Track-action"><!-- + or - will go here --></button> */ }
      {renderAction()}
    </div>
  );
}