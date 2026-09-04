import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import AboutUs from './components/AboutUs';
import ActivitiesPage from './components/ActivitiesPage';
import Contacts from './components/contacts';
import Footer from './components/Footer';
import './App.css';

/**
 * Componente principal de navegación de la plataforma pública CoopAFAMI.
 */
function AppContent() {
    return (
        <div className="app-container">
            <Header />
            
            <main>
                <Routes>
                    {/* Redirección predeterminada: de la raíz '/' hacia '/inicio' */}
                    <Route path="/" element={<Navigate to="/inicio" replace />} />
                    
                    {/* Ruta principal: Sección de bienvenida (Hero) y visión general de servicios */}
                    <Route path="/inicio" element={
                        <>
                            <Hero />
                            <Services />
                        </>
                    } />
                    
                    {/* Ruta 'Quiénes Somos': Misión, visión y valores de la cooperativa */}
                    <Route path="/quienes-somos" element={<AboutUs />} />
                    
                    {/* Ruta 'Servicios': Página extendida de servicios para socios */}
                    <Route path="/servicios" element={<ServicesPage />} />
                    
                    {/* Ruta 'Actividades': Actividades, eventos y capacitaciones */}
                    <Route path="/actividades" element={<ActivitiesPage />} />

                    {/* Ruta 'Contacto': Formulario e información de contacto */}
                    <Route path="/contacto" element={<Contacts />} />

                    {/* Redirección de respaldo para cualquier ruta inexistente hacia '/inicio' */}
                    <Route path="*" element={<Navigate to="/inicio" replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

/**
 * Componente raíz de la aplicación CoopAFAMI.
 *
 * @component
 * @returns {JSX.Element} Aplicación principal con React Router DOM.
 */
function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;
