import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

/**
 * Componente Hero (Sección de portada o banner de bienvenida).
 * Muestra una imagen de portada representativa de la cooperativa y una llamada
 * a la acción (botón "Entrar") animada que redirige a la sección de "Quiénes Somos".
 *
 * @component
 * @returns {JSX.Element} La sección de portada del sitio web.
 */
const Hero = () => {
    return (
        <section className={styles.heroSection}>
            {/* Imagen de fondo configurada inline para dinamismo con fallback en CSS */}
            <div 
                className={styles.heroBackground} 
                style={{ backgroundImage: "url('/media/carrusel-img-1.jpeg')" }}
            >
                <div className={styles.heroContent}>
                    {/* Caja de texto principal animada con clase global "slide-in-left" */}
                    <div className={`${styles.conoceBox} slide-in-left`}>
                        <h2>conoce quienes<br />somos</h2>
                    </div>
                    
                    {/* Botón de navegación animado con clase global "slide-in-left-delayed" */}
                    <Link to="/quienes-somos" className={`${styles.btnEntrar} slide-in-left-delayed`}>
                        Entrar
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
