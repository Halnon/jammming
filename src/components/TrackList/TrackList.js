import React from "react";
import Styles from './TrackList.module.css'
import Track from '../Track/Track'

export default function Tracklist () {
    return (
        <div className={Styles.Tracklist}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        Track 1
        Track 2
        Track 3
        Track 4
      </div>
    );
}