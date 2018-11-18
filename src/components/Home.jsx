import React, { Component } from 'react';
import Order from './Order'

class Home extends Component{
	constructor(props) {
	    super(props);
  	}

	handleClick = (event) => {
		event.preventDefault();
    	this.props.history.push('/Order');
    };
    render(){
    return(
    	<div className="flex-container">
        <div className="item order-topic">Order your Souvenirs of phuket</div>
        <div className="item">
        	<button type="button" class="order-now" onClick={(e)=>this.handleClick(e)}>Order now!</button>
        </div>
    	</div>
    	)
	}
}

export default Home;