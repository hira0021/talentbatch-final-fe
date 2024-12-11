import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import Navbar from './components/NavBar';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
