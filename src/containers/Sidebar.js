import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Sidebar = () => {

    return(
        <Router>

            <ul>
                <li>             
                    <Link to="/">HOME</Link>
                </li>
            </ul>

            <ul>
                <li>
                    GAMES
                </li>
            <ul>
                <li>
                    PLATEFORMS
                </li>
                <ul>
                    <li><input type="checkbox" /> PC </li>
                    <li><input type="checkbox" /> PS4 </li>
                    <li><input type="checkbox" /> XBOX360 </li>
                </ul>
            </ul>

            <ul>
                <li>
                    MODES
                </li>
                <ul>
                    <li><input type="checkbox" /> MMO </li>
                    <li><input type="checkbox" /> CO-OPERATIVE </li>
                    <li><input type="checkbox" /> MULTIPLAYERS </li>
                </ul>
            </ul>

            <ul>
                <li>
                    GENRES
                </li>
                <ul>
                    <li><input type="checkbox" /> ACTION </li>
                    <li><input type="checkbox" /> AVENTURE </li>
                    <li><input type="checkbox" /> COURSE </li>
                </ul>
            </ul>

            </ul>


<ul>
    <li>
            GAMOVORES
    </li>
    <ul>
        <li>
             GAMING MODE
        </li>
        <ul>
                <li><input type="checkbox" /> MMO </li>
                <li><input type="checkbox" /> CO-OPERATIVE </li>
                <li><input type="checkbox" /> MULTIPLAYERS </li>
         </ul>
    </ul>

    <ul>
        <li>
             DISPONIBILITIES
        </li>
        <ul>
                <li><input type="checkbox" /> MORNING </li>
                <li><input type="checkbox" /> DAY </li>
                <li><input type="checkbox" /> SOIREE </li>
                <li><input type="checkbox" /> NIGHT </li>
         </ul>
    </ul>

    <ul>
        <li>
             GENRES
        </li>
        <ul>
                <li><input type="checkbox" /> ACTION </li>
                <li><input type="checkbox" /> AVENTURE </li>
                <li><input type="checkbox" /> COURSE </li>
         </ul>
    </ul>

</ul>




</Router>

    )

}

export default Sidebar;



