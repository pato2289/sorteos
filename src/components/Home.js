import React from 'react';
import Titulo from '../components/ui/Titulo';
import styled from '@emotion/styled';

const Texto = styled.p`
    line-height: 2rem;
    margin: 0 2rem;
`;

const Home = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <Titulo>Sorteo</Titulo>
                <Texto>El sorteo se realizara ingresando en el cuadro de texto varios nombres, separandolos por la tecla ENTER
                    <br/>
                    Luego, al pulsar el boton, devolvera 1 de esos nombres como ganador
                </Texto>
                </div>
                <div className="col-md-6">
                <Titulo>Equipos</Titulo>
                <Texto>Para armar equipos, se ingresaran nombres en un recuadro, separandolos por la tecla ENTER
                    <br/>
                    Luego, se seleccionara la cantidad de jugadores que tiene que haber por equipos
                    <br/>
                    Al pulsar el boton "Armar", se sortearan los equipos y se mostraran por pantalla
                </Texto>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                <Titulo>Tareas</Titulo>
                <Texto>Para armar tareas, se ingresaran nombres y tareas en cada recuadro, separandolos por la tecla ENTER
                    <br/>
                    Al pulsar el boton "Armar", se sortearan las tareas y se mostrara por pantalla que debe hacer cada persona
                </Texto>
                </div>
                <div className="col-md-6">
                <Titulo>Amigo Invisible</Titulo>
                <Texto>
                    Proximamente
                </Texto>
                </div>
            </div>
        </div>
     );
}
 
export default Home;