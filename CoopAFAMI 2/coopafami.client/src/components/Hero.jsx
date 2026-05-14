import React from 'react';

/**
 * Componente Hero: La sección principal de bienvenida con imagen de fondo.
 */
const Hero = () => {
    return (
        <section className="hero-section">
            {/* El fondo se pone mediante 'style' para poder usar la ruta de la imagen dinámica */}
            <div className="hero-background" style={{ backgroundImage: "url('/media/carrusel-img-1.jpeg')" }}>
                <div className="hero-content">
                    {/* Esta clase 'slide-in-left' dispara la animación que viene de la izquierda (definida en index.css) */}
                    <div className="conoce-box slide-in-left">
                        <h2>conoce quienes<br />somos</h2>
                    </div>

                    {/* 'slide-in-left-delayed' hace lo mismo pero tarda 0.4 segundos más en empezar */}
                    <a href="#" className="btn-entrar slide-in-left-delayed">Entrar</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
