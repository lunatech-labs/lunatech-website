import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Expertises from './pages/Expertises';
import ExpertiseSoftwareDefinedVehicle from './pages/Expertises/ExpertiseSoftwareDefinedVehicle';
import ExpertiseSoftwareProjectDelivery from './pages/Expertises/ExpertiseSoftwareProjectDelivery';
import ExpertiseSystemIntegration from './pages/Expertises/ExpertiseSystemIntegration';
import ExpertiseLegacyModernisation from './pages/Expertises/ExpertiseLegacyModernisation';
import About from './pages/About';
import Contact from './pages/Contact';
import Technologies from './pages/Technologies';
import Partners from './pages/Partners';
import OpenSource from './pages/OpenSource';
import NotFound from './pages/NotFound';
import ExpertiseStrategicExpertise from './pages/Expertises/StrategicExpertise';

const routesMap = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/expertises/software-defined-vehicle" element={<ExpertiseSoftwareDefinedVehicle />} />
            <Route path="/expertises/software-project-delivery" element={<ExpertiseSoftwareProjectDelivery />} />
            <Route path="/expertises/system-integration" element={<ExpertiseSystemIntegration />} />
            <Route path="/expertises/legacy-modernisation" element={<ExpertiseLegacyModernisation />} />
            <Route path="/expertises/strategic-expertise" element={<ExpertiseStrategicExpertise />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default routesMap;