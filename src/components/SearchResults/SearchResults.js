import React from "react";
import Styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList.js'

export default function SearchResults () {
    return (
        <div className={Styles.SearchResults}>
        <TrackList />
      </div>
    );
}