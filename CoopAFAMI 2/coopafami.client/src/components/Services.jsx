import React from 'react';

/**
 * Componente Services: Muestra la cuadrícula de servicios disponibles.
 */
const Services = () => {
    // Aquí definimos los datos de cada servicio en una lista (Array) para no repetir código HTML
    const services = [
        { name: "Cuentas de\nAhorro", img: "/media/Cuentas-de-Ahorro.png" },
        { name: "Préstamos\nPersonales", img: "/media/Préstamos-Personales.png" },
        { name: "Préstamos\nEscolares", img: "/media/Préstamos-Escolares.png" },
        { name: "Préstamos\nHipotecario", img: "/media/Préstamos-Hipotecario.png" },
        { name: "Préstamos\nVehículo", img: "/media/Préstamos-Vehículo.png" },
        { name: "Seguro de Vehículo", img: "/media/Seguro-de-Vehículo.png" }
    ];

    return (
        <section className="services-section">
            {/* Título de la sección con borde amarillo (estilos en index.css) */}
            <div className="services-title">
                <h3>Servicios</h3>
            </div>

            <div className="services-grid">
                {/* .map() recorre la lista anterior y crea un DIV por cada servicio automáticamente */}
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <img src={service.img} alt={service.name.replace('\n', ' ')} />

                        {/* Esta lógica de abajo detecta el '\n' en el nombre para poner un salto de línea <br/> */}
                        <p>{service.name.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < service.name.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}</p>
                    </div>
                ))}
            </div>

            <div className="services-action">
                {/* Botón con efecto 'hover' en CSS: al pasar el mouse se redondean los bordes */}
                <a href="#" className="btn-mas-servicios">Mas servicios</a>
            </div>
        </section>
    );
};

export default Services;
