import { SidebarDetail } from "./SidebarDetail";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarDetail.map((value, key) => {
          return (
            <li key={key} className="row" onClick={() => {
              window.location.pathname = value.link; 
            }}>
              <div id="icon">{value.icon}</div>
              <div id="icon">{value.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Sidebar;