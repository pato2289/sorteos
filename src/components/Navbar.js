import React from 'react';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
const Enlace = styled.li`
    :hover{
        text-decoration: underline;
    }
`;

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0">
            <div className="container">
            <Link className="navbar-brand" to="/">RandomWorld</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                <Enlace className="nav-item active">
                    <Link className="nav-link" to="/draw"> Sorteo </Link>
                </Enlace>
                <Enlace className="nav-item active">
                    <Link className="nav-link" to="/teams"> Equipos </Link>
                </Enlace>
                <Enlace className="nav-item active">
                    <Link className="nav-link" to="/tasks"> Tareas </Link>
                </Enlace>
                <Enlace className="nav-item active">
                    <Link className="nav-link disabled" to="/invisiblefriend" > AmigoInvisible </Link>
                </Enlace>
                </ul>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;