/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

// Crear el contexto global
const AppContext = createContext();

/**
 * Proveedor de Estado Global de la Aplicación.
 * Permite gestionar de manera centralizada la información que comparten
 * los distintos componentes (como autenticación de usuario, configuraciones, y
 * datos compartidos de actividades/servicios).
 */
export function AppProvider({ children }) {
    // Estado global de usuario (cargado de sessionStorage si existe para persistencia)
    const [user, setUser] = useState(() => {
        try {
            const saved = sessionStorage.getItem('adminUser');
            return saved ? JSON.parse(saved) : null;
        } catch {
            return null;
        }
    });

    // Estado global para futuras actividades (el usuario mencionó que se desarrollará más adelante)
    const [activities, setActivities] = useState([]);

    // Estado para notificaciones o alertas globales
    const [notification, setNotification] = useState(null);

    // Valores y funciones compartidas en el contexto
    const value = {
        user,
        setUser,
        activities,
        setActivities,
        notification,
        setNotification
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

/**
 * Hook personalizado para consumir el contexto global.
 * @returns {Object} El estado global y funciones de actualización.
 */
export function useApp() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp debe usarse dentro de un AppProvider');
    }
    return context;
}
