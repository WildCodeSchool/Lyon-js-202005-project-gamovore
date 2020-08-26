import React, { useState } from "react";
import SidebarMenu from "../style/SidebarMenu";
import SidebarSubMenu from "../style/SidebarSubMenu";
import SidebarItemMenu from "../style/SidebarItemMenu";
import Linked from "../style/Linked";

const Sidebar = () => {
  const [isPc, setIsPC] = useState(false);
  const handleToggle = () => {
    console.log("Hello Alex!");
    setIsPC(!isPc);
  };

  return (
    <>
      <SidebarMenu>
        <SidebarItemMenu>
          <Linked to="/game-list" issidebar="true">
            HOME
          </Linked>
        </SidebarItemMenu>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarItemMenu>GAMES</SidebarItemMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>PLATEFORMS</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" name="PC" onChange={handleToggle} /> PC
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" name="PS4" onChange={handleToggle} /> PS4
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" name="X360" onChange={handleToggle} />
              XBOX360
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>MODES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MMO{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> CO-OPERATIVE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MULTIPLAYERS{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>GENRES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> ACTION{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> AVENTURE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> COURSE{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
      </SidebarMenu>

      <SidebarMenu>
        <SidebarItemMenu>GAMOVORES</SidebarItemMenu>
        <SidebarSubMenu>
          <SidebarItemMenu>GAMING MODE</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MMO{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> CO-OPERATIVE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MULTIPLAYERS{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>DISPONIBILITIES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> MORNING{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> DAY{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> SOIREE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> NIGHT{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>

        <SidebarSubMenu>
          <SidebarItemMenu>GENRES</SidebarItemMenu>
          <SidebarSubMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> ACTION{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> AVENTURE{" "}
            </SidebarItemMenu>
            <SidebarItemMenu>
              <input type="checkbox" /> COURSE{" "}
            </SidebarItemMenu>
          </SidebarSubMenu>
        </SidebarSubMenu>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
