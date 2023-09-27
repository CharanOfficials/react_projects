import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor() {
        super()
        this.state = {
            products: [
            {
                id: 1,
                price: 600,
                title: 'Phone',
                qty: 1,
                img: ""
            },
            {
                id: 2,
                price: 500,
                title: 'Mobile',
                qty: 1,
                img: ""
            },
            {
                id: 3,
                price: 'Watch',
                title: 'Phone',
                qty: 5,
                img: ""
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
    render() {
        const {products} = this.state
        return (
            <div className='cart'>
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaaseQuantity}
                        onDecreaseQuantity={this.handleDecreaaseQuantity}
                        onDeleteProduct={this.handleDeleteProduct}
                    />
                })}
            </div>
        )
    }
}



export default Cart