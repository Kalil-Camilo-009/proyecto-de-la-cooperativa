import styles from './ActivitiesPage.module.css';
import { useApp } from '../context/AppContext';


/**
 * Componente ActivitiesPage (Página de Actividades de la cooperativa).
 * Muestra el catálogo de actividades, eventos e iniciativas de la cooperativa.
 * Consume el estado global a través de useApp.
 *
 * @component
 * @returns {JSX.Element} La página de actividades.
 */
const ActivitiesPage = () => {
    const { activities } = useApp();

    return (
        <section className={styles.container}>
            {/* Título global de la sección */}
            <div className="section-title-container">
                <div className="section-title-box">
                    <h2>Actividades</h2>
                </div>
            </div>

            {/* Contenido / Lista de Actividades */}
            {activities.length > 0 && (
                <div className={styles.activitiesGrid}>
                    {activities.map((activity) => (
                        <div key={activity.id} className={styles.activityCard}>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={activity.img} 
                                    alt={activity.title} 
                                    className={styles.activityImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.date}>{activity.date}</span>
                                <h3 className={styles.activityTitle}>{activity.title}</h3>
                                <p className={styles.description}>{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ActivitiesPage;
