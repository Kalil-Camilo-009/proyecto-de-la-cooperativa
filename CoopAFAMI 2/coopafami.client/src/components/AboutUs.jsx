import React from 'react';

/**
 * Componente AboutUs: Muestra la Misión, Visión y Valores de la cooperativa.
 */
const AboutUs = () => {
    return (
        <section className="about-us-section">
            {/* Título de la sección: Rectángulo verde con borde amarillo */}
            <div className="section-title-container">
                <div className="section-title-box">
                    <h2>Quienes Somos</h2>
                </div>
            </div>

            {/* Bloque de Misión */}
            <div className="info-block">
                <div className="info-text">
                    <h3>Misión</h3>
                    <p>
                        Ser una Cooperativa de Ahorros, Crédito y<br />
                        Servicios Múltiples que brinda soluciones<br />
                        financieras.
                    </p>
                </div>
                <div className="info-image">
                    {/* Nota: Usamos el nombre exacto del archivo con acento como está en la carpeta media */}
                    <img src="/media/misíon.png" alt="Icono Misión" />
                </div>
            </div>

            {/* Bloque de Visión */}
            <div className="info-block reverse">
                <div className="info-text">
                    <h3>Visión</h3>
                    <p>
                        Convertirnos en la principal Cooperativa de<br />
                        Ahorros, Créditos y Servicios Múltiples,<br />
                        capaz de colaborar en toda lo relacionado a<br />
                        la formación, orientación, educación, apoyo<br />
                        económico y asesoría técnica a favor de<br />
                        nuestros socios, a fin de impulsar el<br />
                        desarrollo logrado bienestar en todo el<br />
                        país.
                    </p>
                </div>
                <div className="info-image">
                    <img src="/media/visíon.png" alt="Icono Visión" />
                </div>
            </div>

            {/* Bloque de Valores */}
            <div className="values-section">
                <div className="values-title-container">
                    <img src="/media/valores.png" alt="Icono Valores Corazón" />
                    <h3>Valores</h3>
                    <img src="/media/valores.png" alt="Icono Valores Corazón" />
                </div>

                <div className="values-grid">
                    <div className="value-item">
                        <img src="/media/responsabilidad.png" alt="Icono Responsabilidad" />
                        <span>Responsabilidad</span>
                        <img src="/media/responsabilidad.png" alt="Icono Responsabilidad" />
                    </div>
                    <div className="value-item">
                        <img src="/media/compromiso.png" alt="Icono Compromiso" />
                        <span>Compromiso</span>
                        <img src="/media/compromiso.png" alt="Icono Compromiso" />
                    </div>
                    <div className="value-item">
                        <img src="/media/trabajo en equipo.png" alt="Icono Trabajo en Equipo" />
                        <span>Trabajo en equipo</span>
                        <img src="/media/trabajo en equipo.png" alt="Icono Trabajo en Equipo" />
                    </div>
                    <div className="value-item">
                        <img src="/media/respeto.png" alt="Icono Respeto" />
                        <span>Respeto</span>
                        <img src="/media/respeto.png" alt="Icono Respeto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
