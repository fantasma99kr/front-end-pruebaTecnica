import React, { useState, useEffect } from "react";
import './css/aeropuerto.css';

export default function Estadisticas() {
    const [info, setInfo] = useState(null);

    //Hace la consulta para mostrar los datos cuando el componente carga
    useEffect(() => {
        fetch("http://127.0.0.1:5000/stack")
            .then(res => res.json())
            .then(datos => {
                setInfo(datos);
            });
    }, []);

    return (
        <div className='main'>
            <div className="header">
                <h3>☰ Stack</h3>
                <span> x </span>
            </div>
            <div className="content">
                {/* valida que la informacion no sea null si es null aun no trae la informacion */}
                {!info ? "Cargando..." : (
                    <>
                        <p>1. Obtener el número de respuestas contestadas y no contestadas: contestadas: <b>{info.conteo.contestadas}</b> No contestadas: <b>{info.conteo.no_contestadas}</b></p>
                        <p>2. Obtener la respuesta con mayor reputación: <b>{info.mayor_reputacion.title}</b> puntuacion: {info.mayor_reputacion.score}</p>
                        <p>3. Obtener la respuesta con menor número de vistas: Pregunta: <b>{info.menor_vistas.title}</b> vistas: <b>{info.menor_vistas.view_count}</b></p>
                        <p>4. Obtener la respuesta más vieja y más actual: mas vieja: <b>{new Date(info.mas_vieja.creation_date * 1000).toLocaleDateString()}</b> mas actual: <b>{new Date(info.mas_actual.creation_date * 1000).toLocaleDateString()}</b></p>
                    </>
                )}
            </div>
        </div>
    );
}