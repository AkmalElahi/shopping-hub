import React , {Component}from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {removeItem,addToCart,subtractQuantity} from '../actions/cart-actions';
class Cart extends Component {
    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addToCart(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    r
    render() { 
        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item=>{
                return(
                    <li className="collection-item avatar" key={item._id}>
                        <div className="item-img">
                            <img src={`http://localhost:3000/image/${item._id}`}/>
                        </div>
                        <div className="item-desc">
                                <span className="title">{item.name}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item._id) }}>arrow_drop_up</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item._id) }}>arrow_drop_down</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item._id) }}>Remove</button>
                            </div>
                    </li>
                )
            })
        ):(
            <p>Nothing</p>
        )
        return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    console.log("in cart")
    console.log(state.addedItems.addedItems)
    return {items:state.addedItems.addedItems}
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addToCart: (id) => { dispatch(addToCart(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);