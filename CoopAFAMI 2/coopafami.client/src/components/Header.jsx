import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Componente Header: Define la barra de navegación superior.
 * Ahora utiliza NavLink de react-router-dom para manejar las URLs y el estado activo.
 */
const Header = () => {
    return (
        <header className="main-header">
            <div className="header-container">
                <div className="logo-container">
                    <img src="/media/logo-img-1.png" alt="Logo CoopAFAMI Circular" className="logo-circular" />
                    <img src="/media/logo-img-2.png" alt="CoopAFAMI" className="logo-text" />
                </div>
                
                <nav className="main-nav">
                    <ul>
                        <li>
                            {/* NavLink añade automáticamente la clase 'active' cuando la URL coincide */}
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/AboutUS" className={({ isActive }) => isActive ? 'active' : ''}>
                                Quienes somos
                            </NavLink>
                        </li>
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
