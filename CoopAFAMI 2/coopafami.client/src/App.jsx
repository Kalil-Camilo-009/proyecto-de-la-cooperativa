import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import AboutUs from './components/AboutUs';
import ActivitiesPage from './components/ActivitiesPage';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import './App.css';

/**
 * Componente secundario que gestiona el enrutamiento y la visualización condicional
 * del Header y Footer dependiendo de la ruta activa.
 */
function AppContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isAdminPage = location.pathname.startsWith('/admin');

    return (
        <div className="app-container">
            {/* Oculta la cabecera en la página de Login y en las rutas de administración */}
            {!isLoginPage && !isAdminPage && <Header />}
            
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
                    
                    {/* Ruta 'Actividades': Muestra la página de actividades y eventos */}
                    <Route path="/actividades" element={<ActivitiesPage />} />

                    {/* Ruta de Login para Administración */}
                    <Route path="/login" element={<Login />} />

                    {/* Ruta para el Panel Administrativo */}
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />

                    {/* Redirección de respaldo para cualquier ruta inexistente */}
                    <Route path="*" element={<Navigate to="/inicio" replace />} />
                </Routes>
            </main>

            {/* Oculta el pie de página en la página de Login y en las rutas de administración */}
            {!isLoginPage && !isAdminPage && <Footer />}
        </div>
    );
}

/**
 * Componente principal de la aplicación CoopAFAMI.
 * Habilita el enrutamiento a través de React Router DOM.
 *
 * @component
 * @returns {JSX.Element} La estructura principal de la aplicación con sus rutas.
 */
function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;


