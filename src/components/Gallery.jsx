import React, { Component } from 'react';
import Order from './Order';
import img1 from "../assets/images/gallery/1.jpg";
import img2 from "../assets/images/gallery/2.jpg";
import img3 from "../assets/images/gallery/3.jpg";
import img4 from "../assets/images/gallery/4.jpg";
import img5 from "../assets/images/gallery/5.jpg";

const imgUrls = [img1,img2,img3,img4,img5];


const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  
  return (
    <div className="image-slide" style={styles}></div>
  );
}

class Gallery extends Component{
	constructor(props){
		super(props);
    this.state = {
      currentImageIndex: 0
    };
	};


  handleChange = (event) => {
      event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        })
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    
    this.setState({
      currentImageIndex: index
    });
  }
  
  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  addToCart=(e)=>{
    e.preventDefault();
    this.props.history.push('/Order');
  }

  paynow=(e)=>{
    e.preventDefault();
    this.props.history.push('/Order',this.state);
  }
  

	render(){
		return(
            <div className="flex-container">
             <div className="item order-form">
             <div className="flex-row">
              <div className="arrow item-row">
              <div className="icon-align slide-arrow" onClick={e=>this.previousSlide(e)}>
                <i class="left"></i>
                </div>
              </div>
              	<div className="img-container item-row">
                <header>
                <h2 className="gallery-header">Gallery</h2>
                <h3 className="gallery-title">ref #{this.state.currentImageIndex}</h3>
                </header>
                  <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
                  <input type="number" onChange={(e)=>this.handleChange(e)} value={this.state.phoneNumber} name="refNumber"/>
                  <div class="container btn-center">
                  <button type="button" className="addToCart" onClick={(e)=>this.addToCart(e)}>Add to cart</button>
                  <button type="button" className="mLeft-20 paynow" onClick={(e)=>this.paynow(e)}>Pay now!</button>
                </div>
              	</div>
              <div className="arrow item-row">
              <div className="icon-align slide-arrow" onClick={e=>this.nextSlide(e)}>
              <i class="right"></i>
              </div>
              </div>
             </div>
             </div>
            </div>
			)
	}
}

export default Gallery;