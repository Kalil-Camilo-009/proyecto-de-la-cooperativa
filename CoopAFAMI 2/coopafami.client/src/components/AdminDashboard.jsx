import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import styles from './AdminDashboard.module.css';

/**
 * Componente AdminDashboard.
 * Panel de administración interna de CoopAFAMI basado en el mockup del usuario.
 *
 * @component
 * @returns {JSX.Element} El panel de administración.
 */
const AdminDashboard = () => {
    const { user, setUser } = useApp();
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Redirección y restauración si no está autenticado
    useEffect(() => {
        if (!user) {
            const savedUser = sessionStorage.getItem('adminUser');
            if (!savedUser) {
                navigate('/login');
            } else {
                setUser(JSON.parse(savedUser));
            }
        }
    }, [user, navigate, setUser]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('adminUser');
        setUser(null);
        navigate('/login');
    };

    // Obtener iniciales (ej. Administrador Global -> AG)
    const getInitials = (name) => {
        if (!name) return 'A';
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };

    return (
        <div className={styles.adminContainer}>
            {/* Header Superior Blanco */}
            <header className={styles.adminHeader}>
                <div className={styles.headerLeft}>
                    {/* Icono de Hamburguesa (Tres líneas) */}
                    <div className={styles.hamburger} onClick={toggleSidebar} role="button" aria-label="Toggle Navigation Menu">
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                    {/* Contenedor de logotipos */}
                    <div className={styles.logoContainer}>
                        <img 
                            src="/media/logo-img-1.png" 
                            alt="Logo Circular CoopAFAMI" 
                            className={styles.logoCircle} 
                        />
                        <img 
                            src="/media/logo-img-2.2.png" 
                            alt="Logo Texto CoopAFAMI" 
                            className={styles.logoText} 
                        />
                    </div>
                </div>

                {/* Perfil del Administrador (Derecha) */}
                <div className={styles.headerRight}>
                    <div className={styles.profileContainer} onClick={toggleDropdown}>
                        <div className={styles.avatar}>
                            {getInitials(user?.nombre)}
                        </div>
                        <span className={styles.profileName}>{user?.nombre || 'Administrador'}</span>
                        <span className={styles.dropdownArrow}>▼</span>
                    </div>

                    {/* Menú Desplegable de Usuario */}
                    {isDropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            <button className={styles.logoutButton} onClick={handleLogout}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={styles.logoutIcon}>
                                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                </svg>
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* Cuerpo del Dashboard */}
            <div className={styles.adminBody}>
                {/* Sidebar Izquierda Verde (Colapsable) */}
                <aside className={`${styles.sidebar} ${isSidebarOpen ? '' : styles.sidebarCollapsed}`}>
                    <h3 className={styles.sidebarTitle}>Gerencia Administrativa</h3>
                    <div className={styles.menuItemActive}>
                        Gestión de usuarios
                    </div>
                    <div className={styles.separator}></div>
                </aside>

                {/* Área de Contenido Principal Derecho (Blanco y Vacío por ahora) */}
                <main className={styles.mainContent}>
                    {/* Contenido futuro de administración */}
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
