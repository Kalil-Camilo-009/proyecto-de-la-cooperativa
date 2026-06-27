import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * Componente Header de la barra de navegación superior.
 * Proporciona enlaces a las secciones principales del sitio, con clases activas
 * automáticas según el estado de la URL.
 *
 * @component
 * @returns {JSX.Element} El encabezado con el logotipo y la barra de navegación.
 */
const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerContainer}>
                {/* Contenedor de logotipos */}
                <div className={styles.logoContainer}>
                    <img 
                        src="/media/logo-img-1.png" 
                        alt="Logo circular oficial de CoopAFAMI" 
                        className={styles.logoCircular} 
                    />
                    <img 
                        src="/media/logo-img-2.png" 
                        alt="Texto CoopAFAMI" 
                        className={styles.logoText} 
                    />
                </div>
                
                {/* Menú de navegación principal */}
                <nav className={styles.mainNav}>
                    <ul>
                        <li>
                            <NavLink 
                                to="/inicio" 
                                className={({ isActive }) => isActive ? styles.active : ''}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/quienes-somos" 
                                className={({ isActive }) => isActive ? styles.active : ''}
                            >
                                Quienes somos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/servicios" 
                                className={({ isActive }) => isActive ? styles.active : ''}
                            >
                                Servicios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/actividades" 
                                className={({ isActive }) => isActive ? styles.active : ''}
                            >
                                Actividades
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contacto" 
                                className={({ isActive }) => isActive ? styles.active : ''}
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
