import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Listing from './pages/listing';
import Order from './pages/order';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Support from './pages/Support';
import AboutVersion from './pages/AboutVersion';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/shop" element={<Listing />} />
                <Route path="/order" element={<Order />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/support" element={<Support />} />
                <Route path="/about-version" element={<AboutVersion />} />
            </Routes>
        </Router>
    );
}

export default App;
