import React from "react";
//import Generes from "../constants/Generes"
import { Select } from 'semantic-ui-react'

const DropdownMenu = () =>{
    
    <div role="listbox" ariaExpanded="false" className="ui selection dropdown" tabIndex="0">
        {/*<Select placeholder='Select gener' options={Generes} />*/}
    </div>
    return(
        <div>
            <div role="listbox" aria-expanded="false" className="ui selection dropdown" tabIndex="0">
            <div aria-atomic="true" aria-live="polite" role="alert" className="divider default text">Select genres</div>
            <i aria-hidden="true" className="dropdown icon"></i>
            <div className="menu transition">
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="true" className="selected item"><span className="text">Default</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Action</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Adult</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Adventure</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Animation</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Biography</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Comedy</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Crime</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Documentary</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Drama</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Family</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Fantasy</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Fil-Noir</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Game-Show</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">History</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Horror</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Musical</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Mystery</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">News</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Reality-TV</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Romance</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Sci-Fi</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Short</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Sport</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Talk-Show</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Thriller</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">War</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Adventure</span></div>
            <div style={{pointerEvents:'all'}} role="option" aria-checked="false" aria-selected="false" className="item"><span className="text">Western</span></div>
            </div>
            </div>
        </div>
        )
}
export default DropdownMenu;