import React, { useState, useReducer } from 'react';
import Boton from './ui/Boton';
import styled from '@emotion/styled';
import Titulo from './ui/Titulo';

const TextArea = styled.textarea`
    @media (min-width: 768px) {
        height: 150px;
        width: 100%;
    }
`;

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
        setInputValues({ [name]:value.split('\n').filter(elem => elem !== '') });
        console.log(inputValues.nombres, ' ', inputValues.tareas)
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
            <div className="row mt-3 text-center">
                    <div className="col-md-3 bg-primary m-auto">
                {arrayResultado.map(resultado => (
                    <>
                    <h3
                        className="bg-primary"
                    >{resultado}</h3>
                    </>
                ))}
                </div>
            </div>    
        ) 
    }

    const onSubmit = e => {
        e.preventDefault();
        setRunOnSubmit(true);
    }

    return (
        <>
           {runOnSubmit
               &&
            asignarTareas()}

            <div className="row">
                <div className="col-md-8 m-auto">
                    <Titulo className="text-center">Asignar Tareas</Titulo>
                    <p>Reglas: Ingresa la cantidad de nombres que quieras, separandolo con "enter"
                        <br />
                        Luego, ingresa la cantidad de tareas a realizar, y al pulsar el boton, se asignaran las tareas a las personas
                    </p>
                </div>
            </div>
            <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-8 d-flex m-auto justify-content-around">
                    <div className="d-flex flex-column">
                    <span className="text-center">Ingrese los nombres</span>
                    <TextArea
                        name="nombres" 
                        onChange={onChange}
                    />
                    </div>
                    <div className="d-flex flex-column">
                    <span className="text-center">Ingrese las tareas</span>
                    <TextArea
                        name="tareas" 
                        onChange={onChange}
                    />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 m-auto">
                    <Boton 
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Asignar Tareas
                    </Boton>
                </div>
            </div>
            </form>
        </>
    );
}

export default Tasks;