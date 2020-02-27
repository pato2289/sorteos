import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
            <Link class="navbar-brand" to="/">RandomWorld</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link className="nav-link" to="/draw"> Sorteo </Link>
                </li>
                <li class="nav-item active">
                    <Link className="nav-link" to="/teams"> Equipos </Link>
                </li>
                <li class="nav-item active">
                    <Link className="nav-link" to="/tasks"> Tareas </Link>
                </li>
                <li class="nav-item active">
                    <Link className="nav-link" to="/invisiblefriend"> AmigoInvisible </Link>
                </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;