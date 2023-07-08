import './Sidebar.style.css';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import logo from '../images/logo-sh.png';

function Sidebar() {
  const { isSidebarOpen, closeSidebar, sidebarRef } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`} ref={sidebarRef}>
      <div className="sidebar-header">
        {/* <h2 className="sidebar-logo">#AG</h2> */}
        <img src={logo} alt="logo-img" className="logo-sidebar" />
        <button className="close-sidebar-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-links">
        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="/games">
          Games
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="/contact">
          Contact
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
