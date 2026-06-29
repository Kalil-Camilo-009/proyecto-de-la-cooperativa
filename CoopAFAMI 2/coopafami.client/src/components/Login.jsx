import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import styles from './Login.module.css';

/**
 * Componente Login (Módulo de administración).
 * Permite a los usuarios internos autenticarse en la plataforma.
 *
 * @component
 * @returns {JSX.Element} La pantalla de inicio de sesión.
 */
const Login = () => {
    const { setUser } = useApp();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Validación básica
        if (!username || !password) {
            setError('Por favor, complete todos los campos.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                
                // Guardar en sessionStorage para persistencia de sesión local
                sessionStorage.setItem('adminUser', JSON.stringify(userData));
                
                // Redirigir a panel de administración (próximamente)
                navigate('/admin/dashboard');
            } else {
                const errorData = await response.json().catch(() => ({}));
                if (response.status === 500) {
                    setError(errorData.message || 'Error interno del servidor. Verifique la conexión a la base de datos.');
                } else {
                    setError(errorData.message || 'Usuario o contraseña incorrectos.');
                }
            }
        } catch {
            setError('Ocurrió un error al conectar con el servidor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <div className={styles.cardHeader}>
                    <h2>Bienvenido al módulo de administración de CoopAFAMI</h2>
                </div>
                
                <div className={styles.cardBody}>
                    {/* Sección Izquierda: Logotipo */}
                    <div className={styles.logoSection}>
                        <img 
                            src="/media/logo-img-1.png" 
                            alt="Logo Oficial de CoopAFAMI" 
                            className={styles.logoImage}
                        />
                    </div>
                    
                    {/* Sección Derecha: Formulario */}
                    <div className={styles.formSection}>
                        <form onSubmit={handleSubmit}>
                            {error && <div className={styles.errorMessage}>{error}</div>}
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="username">Usuario</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Ingrese su usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="username"
                                />
                            </div>
                            
                            <div className={styles.formGroup}>
                                <label htmlFor="password">Contraseñas</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingrese su contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={loading}
                            >
                                {loading ? 'Ingresando...' : 'Ingresar'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
