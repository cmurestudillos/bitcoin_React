import React, {Component} from 'react';
// Rutas
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Componentes Comunes
import NavbarComponent from '../components/shared/navbar/NavbarComponent';
import FooterComponent from "../components/shared/footer/FooterComponent";
// Componentes
import HomeComponent from '../components/home/HomeComponent';
import ErrorComponent from '../components/shared/error/ErrorComponent';

class Router extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('RouterComponent - Metodo render()');

        return(
            <BrowserRouter>
                {/* Cabecera */}
                <NavbarComponent /> 

                {/* Configuracion de rutas y paginas */}
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/home" component={HomeComponent} />
                    <Route component={ErrorComponent} />
                </Switch>

                {/* Footer */}
                <FooterComponent />                
            </BrowserRouter>
        );
    }
}

export default Router;