import styles from './AboutUs.module.css';

/**
 * Componente AboutUs (Sección "Quiénes Somos").
 * Presenta la información institucional básica de la cooperativa: Misión, Visión
 * y Valores organizacionales. Utiliza arreglos de datos estructurados para
 * renderizar la información dinámicamente y mantener el código limpio (DRY).
 *
 * @component
 * @returns {JSX.Element} La sección de "Quiénes Somos" con información institucional.
 */
const AboutUs = () => {
    /**
     * Datos correspondientes a los bloques institucionales (Misión y Visión).
     * @type {Array<{title: string, text: string, img: string, alt: string, reverse: boolean}>}
     */
    const infoBlocks = [
        {
            title: "Misión",
            text: "Ser una Cooperativa de Ahorros, Crédito y Servicios Múltiples que brinda soluciones financieras.",
            img: "/media/mision.png",
            alt: "Icono representativo de la Misión de la cooperativa",
            reverse: false
        },
        {
            title: "Visión",
            text: "Convertirnos en la principal Cooperativa de Ahorros, Créditos y Servicios Múltiples, capaz de colaborar en todo lo relacionado a la formación, orientación, educación, apoyo económico y asesoría técnica a favor de nuestros socios, a fin de impulsar el desarrollo logrando bienestar en todo el país.",
            img: "/media/vision.png",
            alt: "Icono representativo de la Visión de la cooperativa",
            reverse: true
        }
    ];

    /**
     * Datos de los valores corporativos de CoopAFAMI.
     * @type {Array<{name: string, img: string}>}
     */
    const corporateValues = [
        { name: "Responsabilidad", img: "/media/responsabilidad.png" },
        { name: "Compromiso", img: "/media/compromiso.png" },
        { name: "Trabajo en equipo", img: "/media/trabajo-en-equipo.png" },
        { name: "Respeto", img: "/media/respeto.png" }
    ];

    return (
        <section className={styles.aboutUsSection}>
            {/* Título de la sección */}
            <div className="section-title-container">
                <div className="section-title-box">
                    <h2>Quienes Somos</h2>
                </div>
            </div>

            {/* Mapeo dinámico de los bloques de Misión y Visión */}
            {infoBlocks.map((block, index) => (
                <div 
                    key={index} 
                    className={`${styles.infoBlock} ${block.reverse ? styles.reverse : ''}`}
                >
                    <div className={styles.infoText}>
                        <h3>{block.title}</h3>
                        <p>{block.text}</p>
                    </div>
                    <div className={styles.infoImage}>
                        <img src={block.img} alt={block.alt} />
                    </div>
                </div>
            ))}

            {/* Sección de Valores Institucionales */}
            <div className={styles.valuesSection}>
                <div className={styles.valuesTitleContainer}>
                    <img src="/media/valores.png" alt="Icono decorativo izquierdo de valores" />
                    <h3>Valores</h3>
                    <img src="/media/valores.png" alt="Icono decorativo derecho de valores" />
                </div>

                {/* Lista de valores corporativos en cuadrícula */}
                <div className={styles.valuesGrid}>
                    {corporateValues.map((value, index) => (
                        <div className={styles.valueItem} key={index}>
                            <img src={value.img} alt={`Icono representativo del valor ${value.name}`} />
                            <span>{value.name}</span>
                            <img src={value.img} alt={`Icono representativo del valor ${value.name} (derecha)`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
