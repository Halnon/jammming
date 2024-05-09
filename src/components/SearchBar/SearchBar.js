import React from "react";
import Styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <div className={Styles.SearchBar}>
            <input placeholder="Enter A Song, Album, or Artist"/>
            <button className={Styles.SearchButton}>SEARCH</button>
        </div>
    )
}
