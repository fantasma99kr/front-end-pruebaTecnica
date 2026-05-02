import React, { useState, useEffect } from "react";
import './css/aeropuerto.css';

export default function Aeropuerto() {
    const [info, setInfo] = useState(null);
    
    //Hace la consulta para mostrar los datos cuando el componente carga
    useEffect(() => {
        fetch("http://127.0.0.1:5000/aeropuerto")
            .then(res => res.json())
            .then(datos => {
                setInfo(datos);
        });
    }, []);

    return (
        <div className="main">
            <div className="header">
                <h3>✈ Aeropuerto</h3>
                <span> x </span>
            </div>
            <div className="content">
                {/* valida que la informacion no sea null si es null aun no trae la informacion */}
                {!info ? "Cargando..." : (
                    <>
                        <p>1. ¿Cuál es el nombre aeropuerto que ha tenido mayor movimiento durante el año?: <b>{info.aeropuerto_mayor_movimiento.nombre}</b></p>
                        <p>2. ¿Cuál es el nombre aerolínea que ha realizado mayor número de vuelos durante el año? :<b>{info.aerolinea_mayor_vuelos.nombre}</b></p>
                        <p>3. ¿En qué día se han tenido mayor número de vuelos?: <b>{info.dia_mayor_vuelos.fecha}</b></p>
                        <p>4. ¿Cuáles son las aerolíneas que tienen mas de 2 vuelos por día?: <b>{info.aerolineas_mas_dos_vuelos}</b></p>
                    </>
                )}
            </div>
        </div>
    );
}