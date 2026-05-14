import React from 'react';

/**
 * Componente Header: Define la barra de navegación superior.
 */
const Header = () => {
    return (
        // 'className' es como 'class' en HTML. Se usa para aplicar los estilos de index.css
        <header className="main-header">
            <div className="header-container">
                {/* Contenedor de los logos (Imagen circular y texto) */}
                <div className="logo-container">
                    <img src="/media/logo-img-1.png" alt="Logo CoopAFAMI Circular" className="logo-circular" />
                    <img src="/media/logo-img-2.png" alt="CoopAFAMI" className="logo-text" />
                </div>

                {/* Menú de navegación principal */}
                <nav className="main-nav">
                    <ul>
                        {/* La clase 'active' hace que el enlace se vea resaltado (fondo blanco, texto verde) */}
                        <li><a href="/" className="active">Inicio</a></li>
                        <li><a href="#">Quienes somos</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Actividades</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
