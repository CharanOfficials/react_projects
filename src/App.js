import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        products: [
        {
            id: 1,
            price: 600,
            title: 'Phone',
            qty: 1,
            img: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            price: 500,
            title: 'Machine',
            qty: 1,
            img: "https://images.pexels.com/photos/190539/pexels-photo-190539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            price: 20000,
            title: 'Heater',
            qty: 5,
            img: "https://images.pexels.com/photos/14792749/pexels-photo-14792749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]}
  }
  handleIncreaaseQuantity=(product)=>{
    // console.log("Increase the quantity", this.state)
    const products = this.state.products
    const index = products.indexOf(product)
    products[index].qty += 1 
    this.setState({
        products
    })
  }
  handleDecreaaseQuantity=(product)=>{
    if(product.qty > 0){
    const products = this.state.products
    const index = products.indexOf(product)
    products[index].qty -= 1 
    this.setState({
        products
    })
    }
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state
    const items = products.filter((item)=>item.id !== id)
    this.setState({
        products:items
    })
  }
  getCartCount = ()=>{
    const {products} = this.state
    let count = 0
    products.forEach(product => {
      count += product.qty
    })
    return count
  }
  getCartTotal = () => {
    const { products } = this.state
    let cartTotal = 0
    products.map((prod) => cartTotal = cartTotal + prod.price * prod.qty)
    return cartTotal
  }
  render() {
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaaseQuantity}
          onDecreaseQuantity={this.handleDecreaaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
