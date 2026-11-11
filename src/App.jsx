import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTopButton from './components/layout/ScrollToTopButton';
import HomePage from './pages/HomePage';
import PersonalAdvicePage from './pages/PersonalAdvicePage';
import InsulationOverviewPage from './pages/InsulationOverviewPage';
import CavityWallInsulationPage from './pages/CavityWallInsulationPage';
import RoofInsulationPage from './pages/RoofInsulationPage';
import FloorInsulationPage from './pages/FloorInsulationPage';
import GroundInsulationPage from './pages/GroundInsulationPage';
import GlazingPage from './pages/GlazingPage';
import VentilationPage from './pages/VentilationPage';
import SubsidiesPage from './pages/SubsidiesPage';
import AboutPage from './pages/AboutPage';
import SubsidyCheckPage from './pages/SubsidyCheckPage';
import QuoteRequestPage from './pages/QuoteRequestPage';
import FaqPage from './pages/FaqPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/persoonlijk-advies" element={<PersonalAdvicePage />} />
          <Route path="/isolatie" element={<InsulationOverviewPage />} />
          <Route path="/spouwmuurisolatie" element={<CavityWallInsulationPage />} />
          <Route path="/dakisolatie" element={<RoofInsulationPage />} />
          <Route path="/vloerisolatie" element={<FloorInsulationPage />} />
          <Route path="/bodemisolatie" element={<GroundInsulationPage />} />
          <Route path="/hr-glas" element={<GlazingPage />} />
          <Route path="/ventilatie" element={<VentilationPage />} />
          <Route path="/subsidies" element={<SubsidiesPage />} />
          <Route path="/over-ons" element={<AboutPage />} />
          <Route path="/contact" element={<SubsidyCheckPage />} />
          <Route path="/contact-tow" element={<QuoteRequestPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms-condition" element={<TermsPage />} />
          <Route path="/privacy-statement" element={<PrivacyPage />} />
        </Route>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}
