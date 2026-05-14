import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css';

/**
 * Componente principal App: Configura el enrutamiento de la aplicación.
 */
function App() {
    return (
        // BrowserRouter envuelve toda la aplicación para habilitar la navegación por URL
        <BrowserRouter>
            <div className="app-container">
                {/* El Header ya no necesita recibir funciones de navegación, React Router lo maneja */}
                <Header />
                
                <main>
                    <Routes>
                        {/* Redirección automática de la raíz '/' hacia '/home' */}
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        
                        {/* Ruta para el Inicio */}
                        <Route path="/home" element={
                            <>
                                <Hero />
                                <Services />
                            </>
                        } />
                        
                        {/* Ruta para Quienes Somos */}
                        <Route path="/AboutUS" element={<AboutUs />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;