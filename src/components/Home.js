import React from 'react';

const Home = () => {
    return ( 
        <div>
            <div>
                <h1>Sorteo</h1>
                <p>El sorteo se realizara ingresando en el cuadro de texto varios nombres, separandolos por la tecla ENTER
                    <br/>
                    Luego, al pulsar el boton, devolvera 1 de esos nombres como ganador
                </p>
            </div>
            <div>
                <h1>Equipos</h1>
                <p>Para armar equipos, se ingrearan nombres en un recuadro, separandolos por la tecla ENTER
                    <br/>
                    Luego, se seleccionara la cantidad de jugadores que tiene que haber por equipos
                    <br/>
                    Al pulsar el boton "Armar", se sortearan los equipos y se mostraran por pantalla
                </p>
            </div>
        </div>
     );
}
 
export default Home;