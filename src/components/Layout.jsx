import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="page-content">
      <Sidebar />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
