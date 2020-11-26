import React, {Component} from 'react';
// Peticiones Http
import axios from 'axios';
// EndPoint
import dataEur from '../../api/eur.js';
// Componentes Material Ui
import { Card, CardContent, Avatar, Chip, Grid} from '@material-ui/core/';
// Imagenes
import euro from '../../assets/img/euro.png';

class EuroComponent extends Component{

    state = {
        monedaEur: []
    }

    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("EuroComponent.js - Metodo componentWillMount");  

        // Obtenemos los datos de Euro
        this.getEurCurerency();
    }
//-------------------------------------------------------//
// Metodo para obtener datos en Euros                    //
//-------------------------------------------------------//
getEurCurerency(){

    // Log de seguimiento
    console.log('EuroComponent.js - Metodo getEurCurerency');

    axios.get(dataEur.endpoint)
        .then( res => {
            if(res.data){
                this.setState({
                    monedaEur: res.data['bpi'].EUR
                })
        }
    });

}    
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('EuroComponent.js - Metodo render()');

        return(
            <div>
                <Card className="card">
                    <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <img src={euro} width="150" height="150" className="imagen" alt={this.state.monedaEur.description} title={this.state.monedaEur.description} />
                            <Chip avatar={<Avatar>€</Avatar>} label={this.state.monedaEur.rate}  className="badge" clickable color="primary" variant="outlined" /> 
                        </Grid>
                    </Grid>

                    </CardContent>
                </Card>                            
            </div>
        );
    }
}

export default EuroComponent;