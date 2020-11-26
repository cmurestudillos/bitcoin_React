import React, {Component} from 'react';
// Peticiones Http
import axios from 'axios';
// EndPoint
import dataGbp from '../../api/gbp.js';
// Componentes Material Ui
import { Card, CardContent, Avatar, Chip, Grid} from '@material-ui/core/';
// Imagenes
import libra from '../../assets/img/libra.png';

class LibraComponent extends Component{

    state = {
        monedaGbp: []
    }

    //----------------------------------------------------------------------//
    // Antes de renderizar, cargar el metodo                                //
    //----------------------------------------------------------------------//
    componentDidMount (){  
        // Log de seguimiento
        console.log("LibraComponent.js - Metodo componentWillMount");  

        // Obtenemos los datos de Libras
        this.getGbpCurerency();
    }
//-------------------------------------------------------//
// Metodo para obtener datos en Libras                   //
//-------------------------------------------------------//
getGbpCurerency(){

    // Log de seguimiento
    console.log('LibraComponent.js - Metodo getGbpCurerency');

    axios.get(dataGbp.endpoint)
        .then( res => {
            if(res.data){
                this.setState({
                    monedaGbp: res.data['bpi'].GBP
                })
        }
    });

}    
    //----------------------------------------------------------------------//
    // Metodo render                                                        //
    //----------------------------------------------------------------------//
    render(){
        // Log de seguimiento
        console.log('LibraComponent.js - Metodo render()');

        return(
            <div>
                <Card className="card">
                    <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <img src={libra} width="150" height="150" className="imagen" alt={this.state.monedaGbp.description} title={this.state.monedaGbp.description} />
                            <div>
                                <p><Chip avatar={<Avatar>&pound;</Avatar>} label={this.state.monedaGbp.rate}  className="badge" clickable color="primary" variant="outlined" /> </p>
                            </div>
                        </Grid>
                    </Grid>
                    </CardContent>
                </Card>                            
            </div>
        );
    }
}

export default LibraComponent;