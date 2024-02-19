import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Works from './pages/Works';
import WorkDetail from './pages/WorkDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import NotFound from './pages/NotFound';

const routesMap = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceName" element={<ServiceDetail />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:workName" element={<WorkDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default routesMap;