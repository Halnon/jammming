import React from "react";
import Styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList.js'

export default function SearchResults (props) {
    return (
        <div className={Styles.SearchResults}>
        <TrackList userSearchResults={props.userSearchResults} isRemoval={true} onAdd={props.onAdd} />
      </div>
    );
}