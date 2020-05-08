import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Teams = () => {


    const [equipos, setEquipos] = useState(0)
    const [mapArray, setMapArray] = useState(false)
    const [enabledButton, setEnabledButton] = useState(false)
    const [crearArray, setCrearArray] = useState([])

    let arrayEquipos = []
    let equipoArmado = []

    let history = useHistory()

    //Tomar los valores del textarea y crear el Array
    const onChange = (e) => {
        setCrearArray(e.target.value.split("\n"))
        console.log(crearArray)
    }

    //Tomar el valor de personaXequipo y asignarlo al state "equipos"
    const cantEquipos = e => {
        e.preventDefault()
        setEquipos(parseInt(e.target.value))
        console.log(equipos)
    }

    
    //Funcion para mezclar arrays
    const mezclarArreglo = () => {
        for (let i = crearArray.length - 1; i > 0; i--) {
            let indiceAleatorio = Math.floor(Math.random() * (i + 1));
            let temporal = crearArray[i];
            crearArray[i] = crearArray[indiceAleatorio];
            crearArray[indiceAleatorio] = temporal;
        }
    }
    
    //Funcion para armar los equipos (mezcla), separa un "pedazo" y lo asigna a un nuevo array
    const armarEquipos = () => {
        console.log("el arreglo original es: ", crearArray)
        console.log(crearArray.length)
        mezclarArreglo()
        for (let i = 0; i < crearArray.length; i += equipos) {
          let pedazo = crearArray.slice(i, i + equipos);
          arrayEquipos.push(pedazo);
        }
        //Imprimir los equipos
        for(let i=0; i<arrayEquipos.length; i++) {
            let equipo = arrayEquipos[i]
            let mostrarEquipo = '';
            for(let j=0; j<equipo.length; j++) {
                mostrarEquipo += ` ${equipo[j]}`;
            }
            console.log(`Equipo ${i+1}: ${mostrarEquipo}`)
            equipoArmado.push(mostrarEquipo)
            console.log("el valor en equipo es: ", equipoArmado)
        }

        return (
            <>
                <h3 className="text-center">Equipos Armados</h3>
                <div className="bg-primary p-2">
                    {equipoArmado.map(equipo => (
                        <p className="text-center m-auto">Equipo: {equipo}</p>
                    ))}
                </div>
            </>
        )

      }

    //Click en el boton "Armar"
    const onSubmit = e => {
        e.preventDefault()
        setMapArray(true)
        setEnabledButton(true);
    }

    //Redirigir a inicio
    const inicio = e => {
        e.preventDefault()
        console.log('Reiniciando...')
        history.push('/')
    }


    return ( 
        <Fragment>
            <h1 className="text-center">Armar Equipos</h1>
            <p>Reglas: Ingresa la cantidad de nombres que quieras, separandolo con "enter"
               <br/>
               Luego, pulsa el boton "Equipos" y seran armados los equipos automaticamente
            </p>

            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label for="exampleTextarea">Ingresa nombres</label>
                        <textarea 
                            className="form-control" 
                            rows="5"
                            onChange={onChange}
                            disabled={enabledButton}
                        />
                    </div>
                    <label for="exampleTextarea">Ingresa cantidad de personas por equipo:</label>
                    <div className="row">
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                    <div className="form-group d-flex justify-content-between">
                        <input
                            type="text"
                            onChange={cantEquipos} 
                            disabled={enabledButton}
                        />
                        <button 
                            className="btn btn-primary"
                            type="submit"
                            disabled={enabledButton}
                        >
                            Armar
                        </button>
                        <button
                            className="btn btn-primary"
                            type="button"
                            disabled={!enabledButton}
                            onClick={inicio}
                        >
                            Reiniciar
                        </button>
                    </div>
                    </form>
                </div>
                <div className="col-md-6">
                    {(mapArray) &&
                        // No esta mapeando porque equipoArmado esta vacio, solucionar
                        armarEquipos()
                    }
                </div>
                     
            </div>
        </Fragment>
     );
}
 
export default Teams;