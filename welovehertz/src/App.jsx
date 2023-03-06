
import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <li><a href="#ResidentialPage">Residential Page</a></li>
                    <li><a href="#RegisterPage">Registration Page</a></li>
                    <li><a href="#Login">Login</a></li>
                    <li><a href='#Logout'>Logout</a></li>
                </ul>

                <div class="rightNav">
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Welcome to Univeristy at Buffalo Housing 
                            Rating
                        </h1>
                      
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">

                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                        <button > Fill IN </button>
                        </h1>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            <button> FILL IN </button> 
                        </h1>
                    </div>
                </div>
            </section>
           
            <footer className="footer">
                <p className="text-footer">
                    UB Campus Housing Rating
                </p>
            </footer>
        </div>
    )
}
export default App

