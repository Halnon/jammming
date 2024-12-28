import React, {useState} from "react";
import Styles from './SearchBar.module.css';

export default function SearchBar(props) {
    const [term, setTerm] = useState("");

    function passTerm(event) {
        if (event) {
            event.preventDefault();
        }
        props.onSearch(term);
    };

    function handleTermChange({target}) {
        setTerm(target.value);
    };

    return (
        <div className={Styles.SearchBar}>
            <input 
                placeholder="Enter A Song, Album, or Artist"
                onChange={handleTermChange}
                value={term}
            />
            <button 
                className={Styles.SearchButton}
                onClick={passTerm}
                type="button"
            >SEARCH</button>
        </div>
    )
}
