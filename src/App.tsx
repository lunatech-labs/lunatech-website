import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import "./App.scss";

function App() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;


	

