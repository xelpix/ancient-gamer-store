import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import Games from './pages/Games';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import GameDetail from './pages/GameDetail';
import Error from './pages/Error';
import { useGlobalContext } from './context';

function App() {
  const { handleOutsideClick } = useGlobalContext();

  return (
    <div className="main-app-wrapper" onClick={handleOutsideClick}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="games/:gameId" element={<GameDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
