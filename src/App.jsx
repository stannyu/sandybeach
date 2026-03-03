import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |<Link to="/contact">Contact</Link> |
        <Link to="/user/1">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
