import React from 'react'

class CartItem extends React.Component{
      // To get the value of the (this) inside the JSX and the alternate is using the arrow functions as they always refer to the this of the enclosing class or function
    // this.increaseQuantity = this.increaseQuantity.bind(this)
    // increaseQuantity = () => {
    //     // Use this when prev state is not required
    //     // this.setState({
    //     //     qty:this.setState.qty + 1
    //     // })
    //     // use this when previous state is required
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     })
    // }
    // decreaseQuantity = () => {
    //     const { qty } = this.state
    //     if (qty === 0) {
    //         return
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty:prevState.qty - 1 
    //         }
    //     })
    // }
  render() {
    // console.log(this.props)
        const {price, title, qty, img} = this.props.product
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img src={img} alt='' style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img
                            alt='increase'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/748/748113.png'
                            // onClick={this.increaseQuantity}
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img
                            alt='decrease'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/43/43625.png'
                            onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img
                            alt='delete'
                            className='action-icons'
                            src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                            onClick={()=>this.props.onDeleteProduct(this.props.product.id)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
  image: {
    height: 130,
    width: 130,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem