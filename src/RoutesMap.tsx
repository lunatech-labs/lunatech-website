import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from './pages/Services';
import ServiceSoftwareDefinedVehicle from './pages/Services/ServiceSoftwareDefinedVehicle';
import ServiceCustomSoftwareDevelopment from './pages/Services/ServiceCustomSoftwareDevelopment';
import ServiceSystemIntegration from './pages/Services/ServiceSystemIntegration';
import ServiceLegacyTransformation from './pages/Services/ServiceLegacyTransformation';
import About from './pages/About';
import Contact from './pages/Contact';
import Technologies from './pages/Technologies';
import NotFound from './pages/NotFound';

const routesMap = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/software-defined-vehicle" element={<ServiceSoftwareDefinedVehicle />} />
            <Route path="/services/custom-software-development" element={<ServiceCustomSoftwareDevelopment />} />
            <Route path="/services/system-integration" element={<ServiceSystemIntegration />} />
            <Route path="/services/legacy-transformation" element={<ServiceLegacyTransformation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default routesMap;