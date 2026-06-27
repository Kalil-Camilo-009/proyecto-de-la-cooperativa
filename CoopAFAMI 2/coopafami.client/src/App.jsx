import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css';

/**
 * Componente principal de la aplicación CoopAFAMI.
 * Habilita el enrutamiento a través de React Router DOM y estructura la plantilla
 * base de la página web (Header, Main Content Area, y Footer).
 *
 * @component
 * @returns {JSX.Element} La estructura principal de la aplicación con sus rutas y componentes globales.
 */
function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                {/* Cabecera global de navegación */}
                <Header />
                
                <main>
                    <Routes>
                        {/* Redirección predeterminada: de la raíz '/' hacia '/inicio' */}
                        <Route path="/" element={<Navigate to="/inicio" replace />} />
                        
                        {/* Ruta principal: Muestra la sección de bienvenida (Hero) y la cuadrícula de servicios */}
                        <Route path="/inicio" element={
                            <>
                                <Hero />
                                <Services />
                            </>
                        } />
                        
                        {/* Ruta 'Quiénes Somos': Muestra la misión, visión y valores de la cooperativa */}
                        <Route path="/quienes-somos" element={<AboutUs />} />
                        
                        {/* Ruta 'Servicios': Muestra la página extendida/detallada de servicios */}
                        <Route path="/servicios" element={<ServicesPage />} />

                        {/* Redirección de respaldo para cualquier ruta inexistente */}
                        <Route path="*" element={<Navigate to="/inicio" replace />} />
                    </Routes>
                </main>

                {/* Pie de página global */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
