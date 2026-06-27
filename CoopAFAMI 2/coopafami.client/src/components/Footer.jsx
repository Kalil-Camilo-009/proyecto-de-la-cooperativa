import styles from './Footer.module.css';

/**
 * Componente Footer (Pie de página global).
 * Muestra información de copyright y marca en el pie de página del sitio web,
 * estilizado en color amarillo representativo.
 *
 * @component
 * @returns {JSX.Element} El pie de página corporativo.
 */
const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <p>Copyright © 2026 CoopAFAMI</p>
        </footer>
    );
};

export default Footer;
