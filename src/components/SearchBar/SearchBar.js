import React, {useState} from "react";
import Styles from './SearchBar.module.css';

export default function SearchBar(props) {
    const [term, setTerm] = useState("");

    function passTerm() {
        props.onSearch(term);
    };

    return (
        <div className={Styles.SearchBar}>
            <input placeholder="Enter A Song, Album, or Artist"/>
            <button className={Styles.SearchButton}>SEARCH</button>
        </div>
    )
}
