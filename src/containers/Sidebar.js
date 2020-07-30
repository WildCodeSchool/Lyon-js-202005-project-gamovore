import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Ul from "../components/Ul";
import UlInside from "../components/UlInside"
import Li from "../components/Li"

const Sidebar = () => {

    return(

            <Ul>
                <Li>             
                    HOME
                </Li>
            </Ul>
            <Ul>
                <Li>
                    GAMES
                </Li>
                <UlInside>
                    <Li>
                        PLATEFORMS
                    </Li>
                    <UlInside>
                        <Li><input type="checkbox" /> PC </Li>
                        <Li><input type="checkbox" /> PS4 </Li>
                        <Li><input type="checkbox" /> XBOX360 </Li>
                    </UlInside>
                </UlInside>

                <UlInside>
                    <Li>
                        MODES
                    </Li>
                    <UlInside>
                        <Li><input type="checkbox" /> MMO </Li>
                        <Li><input type="checkbox" /> CO-OPERATIVE </Li>
                        <Li><input type="checkbox" /> MULTIPLAYERS </Li>
                    </UlInside>
                </UlInside>

                <UlInside>
                    <Li>
                        GENRES
                    </Li>
                    <UlInside>
                        <Li><input type="checkbox" /> ACTION </Li>
                        <Li><input type="checkbox" /> AVENTURE </Li>
                        <Li><input type="checkbox" /> COURSE </Li>
                    </UlInside>
                </UlInside>

            </Ul>


            <Ul>
                <Li>
                    GAMOVORES
                </Li>
                <UlInside>
                    <Li>
                        GAMING MODE
                    </Li>
                    <UlInside>
                        <Li><input type="checkbox" /> MMO </Li>
                        <Li><input type="checkbox" /> CO-OPERATIVE </Li>
                        <Li><input type="checkbox" /> MULTIPLAYERS </Li>
                    </UlInside>
                </UlInside>

                <UlInside>
                    <Li>
                        DISPONIBILITIES
                    </Li>
                    <UlInside>
                        <Li><input type="checkbox" /> MORNING </Li>
                        <Li><input type="checkbox" /> DAY </Li>
                        <Li><input type="checkbox" /> SOIREE </Li>
                        <Li><input type="checkbox" /> NIGHT </Li>
                    </UlInside>
                </UlInside>

                <UlInside>
                    <Li>
                        GENRES
                    </Li>
                    <UlInside>
                        <Li><input type="checkbox" /> ACTION </Li>
                        <Li><input type="checkbox" /> AVENTURE </Li>
                        <Li><input type="checkbox" /> COURSE </Li>
                    </UlInside>
                </UlInside>

            </Ul>



    )

}

export default Sidebar;



