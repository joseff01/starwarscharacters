import './App.css' ;
import React from 'react'

export default class Alert extends React . Component {
    render () {
        return (
            < div style={{color:"red"}}> {this . props . count > 20 ? "Peligro! la cantidad de segundos ha excedido el límite!!!" :
                "" } </ div >
        );
    }
}