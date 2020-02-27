import React, { Fragment, useState } from 'react';

const Draw = () => {

    const [nombres, setNombres] = useState([])
    const [ganador, setGanador] = useState('')
    const [sorteado, setSorteado] = useState(true)
    const [enabledButton, setEnabledButton] = useState(true)

    
    
    const onChange = (e) => {
        console.log(e.target.value)
        setNombres(e.target.value.split("\n"))
        console.log(nombres)
        setEnabledButton(false)
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(nombres)
        var ganador = nombres[Math.floor(Math.random() * nombres.length)]
        setGanador(ganador)
        console.log(ganador)
        setSorteado(false)
        setEnabledButton(true)
    }

    const mostrarGanador = () =>{
        if(sorteado){
            return null;
        } else {
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
    }

    return (
        <Fragment>
            <h1 className="text-center">Realizar un Sorteo</h1>
            <p>Reglas: Ingresa la cantidad de nombres que quieras, separandolo con "enter"
               <br/>
               Luego, pulsa el boton "Sortear" y 1 sera el elegido como ganador
            </p>

            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label for="exampleTextarea">Ingresa nombres</label>
                        <textarea 
                            className="form-control" 
                            rows="6"
                            onChange={onChange}
                        />
                    </div>
                    <button 
                        className="btn btn-primary"
                        type="submit"
                        disabled={enabledButton}
                    >
                        Sortear
                    </button>
                    </form>
                </div>
                    {mostrarGanador()}
            </div>
        </Fragment>
     );
}
 
export default Draw;