import React, { Fragment, useState } from 'react';
import Boton from './ui/Boton'
import Titulo from './ui/Titulo'


const Draw = () => {

    const [nombres, setNombres] = useState([])
    const [ganador, setGanador] = useState('')
    const [sorteado, setSorteado] = useState(false)
    const [enabledButton, setEnabledButton] = useState(true)
    
    const onChange = (e) => {
        console.log(e.target.value)
        setNombres(e.target.value.split("\n").filter(elem => elem !== ''))
        console.log(nombres)
        setEnabledButton(false)
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(nombres)
        var ganador = nombres[Math.floor(Math.random() * nombres.length)]
        setGanador(ganador)
        console.log(ganador)
        setSorteado(true)
        setEnabledButton(true)
    }

    const mostrarGanador = () => {
            console.log("ejecutando mostrar ganador")
            return (
                <div className="col-md-6">
                    <div className="text-center card text-white bg-primary">
                        <div className="card-body">
                            <h2 className="card-title">
                                El ganador del sorteo es:
                            </h2>
                            <h1 classname="card-text">
                                {ganador}
                            </h1>
                        </div>
                    </div>
                </div>
            )
        }

    return (
        <Fragment>
            <div className="text-center">
            <Titulo className="text-center">Realizar un Sorteo</Titulo>
            <p>Reglas: Ingresa la cantidad de nombres que quieras, separandolo con "enter"
               <br/>
               Luego, pulsa el boton "Sortear" y 1 sera el elegido como ganador
            </p>

            {sorteado && 
                    mostrarGanador()}
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Ingresa nombres</label>
                        <textarea 
                            className="form-control" 
                            rows="6"
                            onChange={onChange}
                        />
                    </div>
                    <Boton 
                        className="btn btn-primary"
                        type="submit"
                        disabled={enabledButton}
                    >
                        Sortear
                    </Boton>
                    </form>
                </div>
            </div>
            </div>
        </Fragment>
     );
}
 
export default Draw;