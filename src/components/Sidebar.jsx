import "./Sidebar.css";


const Sidebar = () => {
    return ( 
        <aside className="sidebar">
          <div className="sidebar-logo-wrapper">
              <a href="index.html">
              <img src="/images/logo.svg" alt="logo" />
              </a>
          </div>
          <div className="sidebar-toggle-theme">
            <img src="/images/icon-moon.svg" alt="icon-moon" />
          </div>
          <div className="sidebar-avatar-image">
              <img src="/images/image-avatar.jpg" alt="avatar" />
          </div>
        </aside>
     );
}
 
export default Sidebar;