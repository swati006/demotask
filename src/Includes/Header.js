import React from 'react'
import { Link } from "react-router-dom";
// import { Store } from '../redux/store';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">

            {/* navbar for mobile devices */}

            <div className="container-fluid mobilenav">
                <nav class="nav  nav-fill w-100">
                    <Link class="nav-link active" aria-current="page" to="/"><img src="./assets/images/home.svg" height="20" /></Link>
                </nav>
            </div>

            {/* navbar for mobile devices */}


            {/* navbar for desktop devices */}

            <div className="container-fluid desknav">
                <h3>Demo web</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-5">
                        <li className="nav-item pt-2">
                           
                        </li>
                        <li className="nav-item">
                            <Link to="/movie-list" className="nav-link active px-3" aria-current="page">Movies</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* navbar for desktop devices */}

        </nav>

    )
}