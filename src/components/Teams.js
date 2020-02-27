import React, { Fragment, useState } from 'react';

const Teams = () => {


    const [equipos, setEquipos] = useState(0)
    const [mapArray, setMapArray] = useState(false)
    const [enabledButton, setEnabledButton] = useState(false)
    const [crearArray, setCrearArray] = useState([])

    let arrayEquipos = []

    const onChange = (e) => {
        setCrearArray(e.target.value.split("\n"))
        console.log(crearArray)
    }

    console.log(crearArray.length)

    const cantEquipos = e => {
        e.preventDefault()
        setEquipos(parseInt(e.target.value))
        console.log(equipos)
    }

    /*
    const mezclarArreglo = crearArray => {
        for (let i = crearArray.length - 1; i > 0; i--) {
            let indiceAleatorio = Math.floor(Math.random() * (i + 1));
            let temporal = crearArray[i];
            crearArray[i] = crearArray[indiceAleatorio];
            crearArray[indiceAleatorio] = temporal;
        }
    }
    */

    
    const armarEquipos = () => {
        console.log("el arreglo original es: ", crearArray)
        console.log(crearArray.length)
        for (let i = 0; i < crearArray.length; i += equipos) {
          let pedazo = crearArray.slice(i, i + equipos);
          arrayEquipos.push(pedazo);
        }
        console.log("el nuevo array es: ", arrayEquipos)
        //validarDatos()
      }
    
    /*  
    const validarDatos = () => {
        console.log("ejecutando validar")
        if(crearArray!==undefined && equipos > 0){
            setEnabledButton(false)
        } else {
            return;
        }
    }
    */

    const onSubmit = e => {
        e.preventDefault()
        setMapArray(true)
        armarEquipos()
    }

    const mapearEquipos = () => {
        if(mapArray){
            return(
                <h1>Mapeando</h1>
            )}
}
    

    return ( 
        <Fragment>
            <h1 className="text-center">Armar Equipos</h1>
            <p>Reglas: Ingresa la cantidad de nombres que quieras, separandolo con "enter"
               <br/>
               Luego, pulsa el boton "Equipos" y seran armados los equipos automaticamente
            </p>

            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label for="exampleTextarea">Ingresa nombres</label>
                        <textarea 
                            className="form-control" 
                            rows="5"
                            onChange={onChange}
                        />
                    </div>
                    <label for="exampleTextarea">Ingresa cantidad de personas por equipo:</label>
                    <div className="form-group d-flex justify-content-between">
                        <input
                            type="text"
                            onChange={cantEquipos} 
                        />
                        <button 
                            className="btn btn-primary"
                            type="submit"
                            disabled={enabledButton}
                        >
                            Armar
                        </button>
                    </div>
                    </form>
                </div>
                    {
                        mapearEquipos()   
                     }
            </div>
        </Fragment>
     );
}
 
export default Teams;