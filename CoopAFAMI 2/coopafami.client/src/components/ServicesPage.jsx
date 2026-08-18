import React from 'react';
import styles from './ServicesPage.module.css';

/**
 * Componente ServicesPage (Página de servicios de la cooperativa).
 * Muestra el catálogo completo de servicios según el diseño del mockup.
 *
 * @component
 * @returns {JSX.Element} La página de servicios.
 */
const ServicesPage = () => {
    const services = [
        { name: "Préstamos\nPersonales", img: "/media/prestamos-personales.png" },
        { name: "Préstamos\nEscolares", img: "/media/prestamos-escolares.png" },
        { name: "Préstamos\nVehículo", img: "/media/prestamos-vehiculo.png" },
        { name: "Seguro de\nVehículo", img: "/media/seguro-de-vehiculo.png" },
        { name: "Préstamos\nHipotecario", img: "/media/prestamos-hipotecario.png" },
        { name: "Planes\nFunerarios", img: "/media/planes-funerarios.png" },
        { name: "Préstamos para\nElectrodoméstico", img: "/media/prestamos-para-electrodomestico.png" },
        { name: "Certificados\nFinancieros", img: "/media/certificados-financieros.png" }
    ];

    // Manejador para cuando una imagen no existe (como las 3 faltantes)
    const handleImageError = (e) => {
        // Usamos una imagen existente como fallback temporal
        e.target.src = "/media/cuentas-de-ahorro.png";
    };

    return (
        <section className={styles.container}>
            {/* Título global de la sección */}
            <div className="section-title-container">
                <div className="section-title-box">
                    <h2>Servicios</h2>
                </div>
            </div>

            {/* Grid de servicios */}
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div className={styles.serviceItem} key={index}>
                        <div className={styles.imageContainer}>
                            <img
                                src={service.img}
                                alt={`Icono de ${service.name.replace('\n', ' ')}`}
                                onError={handleImageError}
                                className={styles.serviceIcon}
                            />
                        </div>
                        <p className={styles.serviceName}>
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
        </section>
    );
};

export default ServicesPage;
