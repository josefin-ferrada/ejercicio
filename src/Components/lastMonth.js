import React, { Component } from 'react';
import Axios from 'axios';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import '../App.css';

class LastMonth extends Component {

    state= {
        monthValues: null
    };

    componentDidMount(){
        Axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then(res =>{
            console.log(typeof res.data.bpi)
            this.setState({ monthValues : res.data.bpi})
            console.log(this.state)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2>Último mes</h2>
                <LineChart data={this.state.monthValues} />
            </div>
        )
    }
}

export default LastMonth;