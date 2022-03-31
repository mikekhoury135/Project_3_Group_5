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
                    <li className="">
                        <a href="#categories">
                            Categories
                        </a>
                    </li>
                    <li className="">
                        <a href="#sales">
                            Sales
                        </a>
                    </li>
                    <li className="">
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