import React, { useState, useReducer, useEffect } from 'react';

const Tasks = () => {

    //state generico, para que el onChange asigne a name = value
    const [inputValues, setInputValues] = useReducer(
        (state, newState) => ({ ...state, ...newState}),
        {nombres:[], tareas:[]}
    );
    const[runOnSubmit, setRunOnSubmit] = useState(false)

    //funcion que toma los valores de los textArea y los asigna al state
    //el .split hace que cada enter corte y guarde el valor en una nueva posicion
    const onChange = e => {
        const { name, value } = e.target
        setInputValues({ [name]:value.split('\n') });
    }

    // Mezclar ambos arrays
    const mezclarArreglo = arrayOrdenado => {
        for (let i = arrayOrdenado.length - 1; i > 0; i--) {
            let indiceAleatorio = Math.floor(Math.random() * (i + 1));
            let temporal = arrayOrdenado[i];
            arrayOrdenado[i] = arrayOrdenado[indiceAleatorio];
            arrayOrdenado[indiceAleatorio] = temporal;
        }
        return (
            arrayOrdenado
        )
    }

    const arrayResultado = []

    const mezclandoArrays = () => {
    // Mezclo los array a medida que los voy escribiendo
    if(inputValues.nombres !== undefined){
        mezclarArreglo(inputValues.nombres)
        console.log('arrayNombresMezclado: ', inputValues.nombres)
    }
    if(inputValues.tareas !== undefined){
        mezclarArreglo(inputValues.tareas)
        console.log('arrayTareasMezclado: ', inputValues.tareas)
    }
    for(let i = 0; i<inputValues.tareas.length && inputValues.nombres.length; i++){
        arrayResultado[i] = `${inputValues.nombres[i]}: ${inputValues.tareas[i]}`;
        console.log(`en la posicion ${i} esta:  ${arrayResultado[i]}`)
    }
}

    mezclandoArrays();

    //funcion que activa el boton una vez que haya datos en ambos textarea
    

    //funcion que al darle "repartir tareas" asigne a cada nombre, 1 o mas tareas
    const asignarTareas = () => {
        console.log('ejecutando asignar tareas')
        return (
            <div>
                {arrayResultado.map(resultado => (
                    <>
                    <p
                        className="bg-primary"
                    >{resultado}</p>
                    </>
                ))}
            </div>    
        ) 
    }

    const onSubmit = e => {
        e.preventDefault();
        setRunOnSubmit(true);
    }

    return (
        <>
            <h1>Desde la pagina de tareas</h1>
            <div className="row mt-3">
                    <div className="col bg-primary">
                    {runOnSubmit
                    &&
                    asignarTareas()}
                    </div>
            </div>
            <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <span className="text-center">Ingrese los nombres</span>
                    <br/>
                    <textarea
                        name="nombres" 
                        onChange={onChange}
                    />
                </div>
                <div className="col-md-6">
                    <span className="text-center">Ingrese las tareas</span>
                    <br/>
                    <textarea
                        name="tareas" 
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button 
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Asignar Tareas
                    </button>
                </div>
            </div>
            </form>
        </>
    );
}

export default Tasks;