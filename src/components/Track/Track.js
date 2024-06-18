import React from "react";
import Styles from './Track.module.css'

export default function Track (props) {
  function renderAction() {
    if (props.isRemoval) {
      return <button className={Styles.Track_action}>-</button>
    } else {
      return <button className={Styles.Track_action}>-</button>
    }
  }

  return (
    <div className={Styles.Track}>
      <div className={Styles.Track_information}>
        {/* <h3><!-- track name will go here --></h3> */}
        
        {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
      </div>
      {/* <button class="Track-action"><!-- + or - will go here --></button> */}
    </div>
  );
}