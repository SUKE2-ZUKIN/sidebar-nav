import { useEffect, useState } from "react";
import { SidebarDetail } from "./SidebarDetail";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  const [path, setPath] = useState<string>("");
  
  useEffect(() => {
    setPath(window.location.pathname);
    console.log(path);
  }, [path]);
  
  return (
    <div className="Sidebar">
      <SidebarIcon />
      <ul className="SidebarList">
        {SidebarDetail.map((value, key) => {
          return (
            <li 
              key={key} 
              id={path == value.link ? "active" : ""}
              className="row" 
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Sidebar;