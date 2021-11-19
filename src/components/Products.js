import { Component } from "react";
import productData from "../data/productData";
import Cart from "./Cart";



class Products extends Component {


    constructor() {
        super();
        this.state = {
            product: productData,
            list: [],
            total: "",
        };
      }
      
     
      addToCart = (event) => {
        event.preventDefault()
        this.setState({
            list: [...this.state.list, event.target.value],
            total: +(this.state.total) + +(event.target.value.split(",")[1])
        })
      }


      render() {
        
            console.log(this.state)
          const displayProduct = this.state.product.map((each) => {
            return (
            <div className = "product-card" key = {each.id} >
                <h2>{each.name} </h2>
                <p>{`Price: $${each.price.toFixed(2)}`}</p>
                <button type = "submit" onClick ={this.addToCart} value ={[each.name, each.price]}>Add To Cart</button>
                <img onClick ={this.handleItem} className="product-image" src={each.img} alt={each.id} />
                <p className = "description">{each.description}</p>
            </div>
            )
        })

        
    
          return (
              
              <div className ="background">

                <div className ="products">
            <h1 className = "title">My Garage Sale</h1>
                   
                   
                    {displayProduct}
                
                </div>
                    <Cart list = {this.state.list}
                          total = {this.state.total}
                    />
              </div>
            
          )
      }

}

export default Products;