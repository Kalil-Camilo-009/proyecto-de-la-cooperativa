import styles from './ServicesPage.module.css';

/**
 * Componente ServicesPage (Página extendida de servicios).
 * Muestra información detallada sobre el catálogo completo de servicios.
 * Actualmente sirve como una página de construcción o marcador de posición (placeholder)
 * para desarrollos futuros.
 *
 * @component
 * @returns {JSX.Element} La página extendida de servicios de la cooperativa.
 */
const ServicesPage = () => {
    return (
        <section className={styles.container}>
            {/* Título global de la sección usando estilos compartidos */}
            <div className="section-title-container">
                <div className="section-title-box">
                    <h2>Servicios</h2>
                </div>
            </div>
            
            {/* Mensaje de estado informativo */}
            <p className={styles.notice}>
                Página en construcción. Próximamente agregaremos más información aquí.
            </p>
        </section>
    );
};

export default ServicesPage;
