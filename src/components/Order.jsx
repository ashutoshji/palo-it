import React, { Component } from 'react';

class Order extends Component{
	constructor(props) {
	    super(props);
	    this.state={
	    	isValid:false,
	    	firstName:null,
	    	lastName:null,
	    	phoneNumber:null,
	    	email:null,
	    	country:null,
	    	copy0:'',
	    	copy1:'',
	    	copy2:'',
	    	copy3:'',
	    	copy4:'',
	    	summary:"Summary of",
	    	options: [
			      {
			        name: 'Select…',
			        value: null,
			      },
			      {
			        name: 'SG',
			        value: 'SG',
			      },
			      {
			        name: 'HK',
			        value: 'HK',
			      }
			    ],
   		   value: '?'
  		}
  	}

  	 componentDidMount = () => {
        if(this.props.location.state!=undefined && this.props.location.state.currentImageIndex>=0){
        let data = 'copy' + this.props.location.state.currentImageIndex;
        this.setState({
          [data]: this.props.location.state.refNumber
        });
        }
  	}

  	handleChange = (event) =>{
  		event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        })
  	}

  	addToCart = (event) =>{
  		event.preventDefault();
  		const isValid = this.refs.formref.checkValidity();
  		if(isValid){
          console.log('completed');
          this.setState({
          	isValid:true
          })
  		}
  		else{
  			console.log('please fill the form');
  		}
  	}

	
    render(){
    return(
    	<div className="flex-container">
        <div className="item order-form">
        	<div class="container">
        	<header>
        		<h2>{this.state.isValid && this.state.summary} Your Order</h2>
        	</header>
        	  <form ref="formref">
			    <label for="lname"><b>Lastname</b></label>
			    {!this.state.isValid && <input type="text" onChange={(e)=>this.handleChange(e)} placeholder="Enter Lastname" value={this.state.firstName} name="firstName" required />}
			    {this.state.isValid && <div className="read-text">{this.state.firstName}</div>}
                 <label for="fname"><b>Firstname</b></label>
			    {!this.state.isValid && <input type="text" onChange={(e)=>this.handleChange(e)} placeholder="Enter Firstrname" value={this.state.lastName} name="lastName" required />}
			    {this.state.isValid && <div className="read-text">{this.state.lastName} </div>}
			     <label for="phone"><b>Phone number</b></label>
			    {!this.state.isValid && <input type="text" onChange={(e)=>this.handleChange(e)} placeholder="Enter Phone number" value={this.state.phoneNumber} name="phoneNumber" required />}
			    {this.state.isValid && <div className="read-text">{this.state.phoneNumber}</div>}
			     <label for="email"><b>Email</b></label>
			     {!this.state.isValid && <input type="text" onChange={(e)=>this.handleChange(e)} placeholder="Enter Email" value={this.state.email} name="email" required />}
			     {this.state.isValid && <div className="read-text">{this.state.email}</div>}
			     <label for="country">Country</label>
				  {!this.state.isValid &&  <select id="country" name="country" onChange={(e)=>this.handleChange(e)}>
				      {this.state.options.map(item => (
			            <option key={item.value} value={item.value}>
			              {item.name}
			            </option>
			          ))}
				   </select>}
				   {this.state.isValid && <div className="read-text">{this.state.country}</div>}
			     <label for="address"><b>Postal Address</b></label>
			    {!this.state.isValid && <textarea placeholder="Enter Address" onChange={(e)=>this.handleChange(e)} value={this.state.address} name="address" required />}
			    {this.state.isValid && <div className="read-text">{this.state.address}</div>}
			    <label for="copy0"><b>Number of copies for #1</b></label>
			    {!this.state.isValid && <input type="number" maxlength={10} onChange={(e)=>this.handleChange(e)} value={this.state.copy0} name="copy0" />}
			    {this.state.isValid && <div className="read-text">{this.state.copy1}</div>}
			    <label for="copy2"><b>Number of copies for #2</b></label>
			    {!this.state.isValid && <input type="number"  maxlength={10} onChange={(e)=>this.handleChange(e)} value={this.state.copy1} name="copy2" />}
			    {this.state.isValid && <div className="read-text">{this.state.copy2}</div>}
			    <label for="copy3"><b>Number of copies for #3</b></label>
			    {!this.state.isValid && <input type="number"  maxlength={10} onChange={(e)=>this.handleChange(e)} value={this.state.copy2} name="copy3" />}
			    {this.state.isValid && <div className="read-text">{this.state.copy3}</div>}
			    <label for="copy4"><b>Number of copies for #4</b></label>
			    {!this.state.isValid && <input type="number"  maxlength={10} onChange={(e)=>this.handleChange(e)} value={this.state.copy3} name="copy4" />}
			    {this.state.isValid && <div className="read-text">{this.state.copy4}</div>}
			    <label for="copy5"><b>Number of copies for #5</b></label>
			    {!this.state.isValid && <input type="number"  maxlength={10} onChange={(e)=>this.handleChange(e)} value={this.state.copy4} name="copy5" />}
			    {this.state.isValid && <div className="read-text">{this.state.copy5}</div>}
			    </form>
			  </div>

			  {!this.state.isValid && <div class="container btn-center">
			    <button type="button" className="addToCart" onClick={(e)=>this.addToCart(e)}>Add to cart</button>
			  </div>}
        </div>
    	</div>
    	)
	}
}

export default Order;