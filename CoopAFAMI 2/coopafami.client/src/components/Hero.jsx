import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Hero: La sección principal de bienvenida con imagen de fondo.
 * Ahora utiliza Link para navegar hacia la sección de Quienes Somos.
 */
const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background" style={{ backgroundImage: "url('/media/carrusel-img-1.jpeg')" }}>
                <div className="hero-content">
                    <div className="conoce-box slide-in-left">
                        <h2>conoce quienes<br />somos</h2>
                    </div>
                    
                    {/* El botón 'Entrar' ahora es un Link hacia /AboutUS */}
                    <Link to="/AboutUS" className="btn-entrar slide-in-left-delayed">
                        Entrar
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
