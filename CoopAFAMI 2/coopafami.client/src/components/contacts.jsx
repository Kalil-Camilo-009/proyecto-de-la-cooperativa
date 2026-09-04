import React from 'react';
import styles from './contacts.module.css';

/**
 * Componente Contacts (Sección/Apartado "Contacto").
 * Muestra la ilustración visual (contacto.png) a la izquierda y los datos de contacto
 * (correo electrónico y teléfono) a la derecha, siguiendo el diseño del mockup.
 *
 * @component
 * @returns {JSX.Element} El apartado de contacto.
 */
const Contacts = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                {/* Elemento visual (contacto.png) */}
                <div className={styles.imageContainer}>
                    <img 
                        src="/media/contacto.png" 
                        alt="Ilustración de Contacto" 
                        className={styles.contactImage} 
                    />
                </div>

                {/* Información de contacto */}
                <div className={styles.infoContainer}>
                    <h2 className={styles.title}>
                        Contáctanos por estas<br />vía:
                    </h2>

                    <div className={styles.contactDetails}>
                        <a 
                            href="mailto:cooperativadefamiliayamigos@gmail.com" 
                            className={styles.detailLink}
                        >
                            cooperativadefamiliayamigos@gmail.com
                        </a>

                        <a 
                            href="tel:+18299534250" 
                            className={styles.detailLink}
                        >
                            +1 (829) 953-4250
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
