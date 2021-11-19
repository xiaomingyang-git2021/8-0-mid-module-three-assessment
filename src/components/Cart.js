import { Component } from "react";


class Cart extends Component {

    // get list info from products and iterate through it and display it below <ul>


    constructor() {
        super();
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          creditCard: "",
          zipCode:"",
        };
      }

      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

      submitForm = () => {

        if (this.state.creditCard.length !== 16) {
            alert ("Credit card number is not valid")
        }
       if (this.state.zipCode.length !== 5) {
            alert("Zip code is not valid")
       }

          if (this.state.firstName && this.state.lastName && this.state.email && this.state.creditCard && this.state.zipCode !== "") {
            alert (`Purchase complete your total amount to pay is $${( Number(this.props.total) + (Number(this.props.total) * 0.05)).toFixed(2)}`)
          }
          else {
              alert ("Input is not valid")
          }

      }





    render() {
        console.log(this.state)
    const displayCart = this.props.list.map((each) => {
       return ( <li>{each.split(",")[0]}: ${each.split(",")[1]}</li>)
    })

    const displaySubTotal = "$" + Number(this.props.total).toFixed(2)
    const displayTax = "$" + (Number(this.props.total) * 0.05).toFixed(2)
    const displayTotal = "$" + ( Number(this.props.total) + (Number(this.props.total) * 0.05)).toFixed(2)
    console.log(this.props.list)


   
    return (
     <div className = "cart">
          <h1>Cart</h1>
          <ul>
            {displayCart}
          </ul>
          
          <h2>Subtotal: {displaySubTotal} </h2>
            


          <h2>Tax: {displayTax} </h2>

           

          <h2>Total: {displayTotal }</h2>

          <form id ="checkout">
          <h2>Checkout</h2>

             <label htmlFor="firstName">First Name</label>
              <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}/>

              <label htmlFor="lastName">Last Name</label>
              <input
               type="text"
               id="lastName"
               name="lastName"
               value={this.state.lastName}
               onChange={this.handleChange}/>

              <label htmlFor="email">Email</label>
              <input
               type="text"
               id="email"
               name="email"
               value={this.state.email}
               onChange={this.handleChange}/>

              <label htmlFor="creditCard">Credit Card</label>
              <input
               type="text"
               id="creditCard"
               name="creditCard"
               value={this.state.creditCard}
               onChange={this.handleChange}/>

              <label htmlFor="zipCode">Zip Code</label>
              <input
               type="text"
               id="zipCode"
               name="zipCode"
               value={this.state.zipCode}
               onChange={this.handleChange}/>

              <button onClick = {this.submitForm}>Buy Now</button>
          </form>
          </div>
    )
    }
}

export default Cart;