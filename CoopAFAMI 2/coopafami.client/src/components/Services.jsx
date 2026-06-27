import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

/**
 * Componente Services (Sección de cuadrícula de servicios).
 * Muestra una vista previa de los principales servicios ofrecidos por la cooperativa,
 * estructurados dinámicamente con un botón para ver el listado extendido.
 *
 * @component
 * @returns {JSX.Element} La cuadrícula informativa de servicios principales.
 */
const Services = () => {
    /**
     * Definición de datos de servicios principales para evitar duplicación.
     * Cada objeto contiene el nombre descriptivo (con salto de línea \n opcional)
     * y la ruta al archivo de imagen.
     *
     * @type {Array<{name: string, img: string}>}
     */
    const services = [
        { name: "Cuentas de\nAhorro", img: "/media/cuentas-de-ahorro.png" },
        { name: "Préstamos\nPersonales", img: "/media/prestamos-personales.png" },
        { name: "Préstamos\nEscolares", img: "/media/prestamos-escolares.png" },
        { name: "Préstamos\nHipotecario", img: "/media/prestamos-hipotecario.png" },
        { name: "Préstamos\nVehículo", img: "/media/prestamos-vehiculo.png" },
        { name: "Seguro de Vehículo", img: "/media/seguro-de-vehiculo.png" }
    ];

    return (
        <section className={styles.servicesSection}>
            {/* Título de la sección */}
            <div className={styles.servicesTitle}>
                <h3>Servicios</h3>
            </div>

            {/* Cuadrícula interactiva de servicios */}
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div className={styles.serviceItem} key={index}>
                        <img 
                            src={service.img} 
                            alt={`Icono ilustrativo de ${service.name.replace('\n', ' ')}`} 
                        />

                        {/* Maneja el salto de línea en el texto si contiene \n */}
                        <p>
                            {service.name.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < service.name.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                ))}
            </div>

            {/* Enlace para redirigir a la página completa de servicios */}
            <div className={styles.servicesAction}>
                <Link to="/servicios" className={styles.btnMasServicios}>
                    Mas servicios
                </Link>
            </div>
        </section>
    );
};

export default Services;
