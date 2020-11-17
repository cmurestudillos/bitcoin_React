import React, {Component} from 'react';

class ErrorComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('ErrorComponent.js - Metodo render()');
        return(
            <div class="container text-center">
                <h1>Pagina no encontrada.</h1>
                <hr></hr>
                <p>La pagina que buscas no existe, intentalo mas tarde.</p>
            </div>         
        )
    }
}

export default ErrorComponent;
