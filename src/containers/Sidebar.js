import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import SidebarSubMenu from "../components/SidebarSubMenu"
import SidebarItemMenu from "../components/SidebarItemMenu"

const Sidebar = () => {

    return(
  <>
            <SidebarMenu>
                <SidebarItemMenu>             
                    HOME
                </SidebarItemMenu>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarItemMenu>
                    GAMES
                </SidebarItemMenu>
                <SidebarSubMenu>
                    <SidebarItemMenu>
                        PLATEFORMS
                    </SidebarItemMenu>
                    <SidebarSubMenu>
                        <SidebarItemMenu><input type="checkbox" /> PC </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> PS4 </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> XBOX360 </SidebarItemMenu>
                    </SidebarSubMenu>
                </SidebarSubMenu>

                <SidebarSubMenu>
                    <SidebarItemMenu>
                        MODES
                    </SidebarItemMenu>
                    <SidebarSubMenu>
                        <SidebarItemMenu><input type="checkbox" /> MMO </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> CO-OPERATIVE </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> MULTIPLAYERS </SidebarItemMenu>
                    </SidebarSubMenu>
                </SidebarSubMenu>

                <SidebarSubMenu>
                    <SidebarItemMenu>
                        GENRES
                    </SidebarItemMenu>
                    <SidebarSubMenu>
                        <SidebarItemMenu><input type="checkbox" /> ACTION </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> AVENTURE </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> COURSE </SidebarItemMenu>
                    </SidebarSubMenu>
                </SidebarSubMenu>

            </SidebarMenu>


            <SidebarMenu>
                <SidebarItemMenu>
                    GAMOVORES
                </SidebarItemMenu>
                <SidebarSubMenu>
                    <SidebarItemMenu>
                        GAMING MODE
                    </SidebarItemMenu>
                    <SidebarSubMenu>
                        <SidebarItemMenu><input type="checkbox" /> MMO </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> CO-OPERATIVE </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> MULTIPLAYERS </SidebarItemMenu>
                    </SidebarSubMenu>
                </SidebarSubMenu>

                <SidebarSubMenu>
                    <SidebarItemMenu>
                        DISPONIBILITIES
                    </SidebarItemMenu>
                    <SidebarSubMenu>
                        <SidebarItemMenu><input type="checkbox" /> MORNING </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> DAY </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> SOIREE </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> NIGHT </SidebarItemMenu>
                    </SidebarSubMenu>
                </SidebarSubMenu>

                <SidebarSubMenu>
                    <SidebarItemMenu>
                        GENRES
                    </SidebarItemMenu>
                    <SidebarSubMenu>
                        <SidebarItemMenu><input type="checkbox" /> ACTION </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> AVENTURE </SidebarItemMenu>
                        <SidebarItemMenu><input type="checkbox" /> COURSE </SidebarItemMenu>
                    </SidebarSubMenu>
                </SidebarSubMenu>

            </SidebarMenu>

</>

    )

}

export default Sidebar;



