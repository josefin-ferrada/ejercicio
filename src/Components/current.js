import React, { Component } from 'react';
import Axios from 'axios';

class Current extends Component {

    state= {
        value: null,
    };

    getData(){
        Axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(res =>{
            
            console.log()
            this.setState({ value : Number(res.data.bpi.USD.rate.replace(',','')).toFixed()})
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
            <h3>Valor actual </h3>
            <div>{this.state.value} USD </div>
            </div>
        )
    }
}

export default Current;