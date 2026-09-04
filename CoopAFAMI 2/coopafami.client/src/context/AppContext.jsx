/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

// Crear el contexto global
const AppContext = createContext();

/**
 * Proveedor de Estado Global de la Aplicación Pública CoopAFAMI.
 */
export function AppProvider({ children }) {
    // Estado global para actividades o notificaciones públicas
    const [activities, setActivities] = useState([]);
    const [notification, setNotification] = useState(null);

    const value = {
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
