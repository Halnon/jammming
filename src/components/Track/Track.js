import React from "react";
import Styles from './Track.module.css'

export default function Track () {
    return (
      <div className={Styles.Track}>
        <div className={Styles.Track-information}>
          {/* <h3><!-- track name will go here --></h3> */}
          
          {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
}