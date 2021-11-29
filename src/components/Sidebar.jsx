import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ theme, setTheme }) => {
  
  const toggleTheme = () => {
    setTheme(curr => curr==='light' ? 'dark' : 'light')
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo-wrapper">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
      <div onClick={toggleTheme} className="sidebar-toggle-theme">
        <img 
        src={theme==='light' ? '/images/icon-moon.svg' : '/images/icon-sun.svg'}
        alt="icon-moon" 
        />
      </div>
      <div className="sidebar-avatar-image">
        <img src="/images/image-avatar.jpg" alt="avatar" />
      </div>
    </aside>
  );
}

export default Sidebar;