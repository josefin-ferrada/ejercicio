import React, { Component } from 'react';
import Axios from 'axios';

class Current extends Component {

    state= {
        value: null,
    };

    getData(){
        Axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(res =>{
            this.setState({ value : res.data.bpi.USD.rate_float.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".")})
            console.log(this.state)
        })
        .catch(err =>{
            console.log(err)
        })
    }


    componentDidMount(){
        this.getData()
        setInterval(() => this.getData(), 60000);
    }

    render() {
        return (<div>
            <h2>Valor actual </h2>
            <h3>${this.state.value} USD </h3>
            <p>Valor actualizado cada minuto</p>
            </div>
        )
    }
}

export default Current;