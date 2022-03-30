import React from "react";

function Nav() {
    
    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="lifting">🏋️</span> Gym Store
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#categories">
                            Categories
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#sales">
                            Sales
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#about">
                            Cart
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;