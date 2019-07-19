import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


//import {getProducts,getProductsError,getProductsPending} from '../reducers/products-reducer'
import { fetchProducts } from '../actions/products-actions';
import { addToCart } from './../actions/cart-actions';


class AllItem extends Component {
    // constructor(props){
    //     super(props);

    //     this.shouldComponentRender = this.shouldComponentRender.bind(this);
    // }

    componentWillMount() {
        const { fetchProducts } = this.props
        fetchProducts();

    }
    shouldComponentRender = () => {
        const { pending } = this.props;
        // console.log("in should")
        // console.log(pending)
        if (pending !== false) return false;
        //console.log("pending " +pending)

        return true;
    }
    handleClick=(id)=>{
        this.props.addToCart(id)
    }
    render() {
 
        const { products, error } = this.props;
        
        if (!this.shouldComponentRender()) return (<div><h2>Loading Please wait</h2></div>)

        return (
            <div className="container" >
                
                <div className='product-list-wrapper'>
                    {error && <span className='product-list-error'>{this.props.error}</span>}
                </div>
                <h3 className="center"> on sale</h3>
                <div className="box">
                {products.filter(product=>product.status==="on sale").map(
                    product => <div className="card" key={product._id}>
                    <div className="card-image">
                        <img src={`http://localhost:3000/image/${product._id}`} alt="new" />
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" 
                        onClick={() => { this.handleClick(product._id) }}><i className="material-icons">add</i></span>
                    </div>
                    
                    <div className="card-content">
                    <span className="card-title">{product.name}</span>
                            <p> Seller {product.seller}</p>
                            <p><b>Price: Rs.{product.price}</b></p>
                        </div>
                </div>
                )}

                </div>
                <h3 className="center"> most purchased</h3>
                <div className="box">
                {products.filter(product=>product.status==="most purchased").map(
                    product => <div className="card" key={product._id}>
                    <div className="card-image">
                        <img src={`http://localhost:3000/image/${product._id}`} alt="new" />
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" 
                        onClick={() => { this.handleClick(product._id) }}><i className="material-icons">add</i></span>
                    </div>
                    
                    <div className="card-content">
                    <span className="card-title">{product.name}</span>
                            <p> Seller {product.seller}</p>
                            <p><b>Price: Rs.{product.price}</b></p>
                        </div>
                </div>
                )}

                </div>
                <h3 className="center"> most viewed</h3>
                <div className="box">
                {products.filter(product=>product.status==="most viewed").map(
                    product => <div className="card" key={product._id}>
                    <div className="card-image">
                        <img src={`http://localhost:3000/image/${product._id}`} alt="new" />
                        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" 
                        onClick={() => { this.handleClick(product._id) }}><i className="material-icons">add</i></span>
                    </div>
                    
                    <div className="card-content">
                    <span className="card-title">{product.name}</span>
                            <p> Seller {product.seller}</p>
                            <p><b>Price: Rs.{product.price}</b></p>
                        </div>
                </div>
                )}

                </div>
                {/* <img src="http://localhost:3000/items/" alt="image"/> */}
            </div>
        )
    }
}
//<span className="card-title">{product.seller}</span>
// products.map(product => <div className="card" key={product._id}>
//                     <div className="card-image">
//                         <img src={`http://localhost:3000/image/${product._id}`} alt="new" />
//                         <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" 
//                         onClick={() => { this.handleClick(product._id) }}><i className="material-icons">add</i></span>
//                     </div>
                    
//                     <div className="card-content">
//                     <span className="card-title">{product.name}</span>
//                             <p> Seller {product.seller}</p>
//                             <p><b>Price: Rs.{product.price}</b></p>
//                         </div>
//                 </div>)
const mapStateToProps = state => {
    console.log("in all")
    console.log(state)
    return {
        pending: state.data.pending,
        products: state.data.products,
        error: state.data.error

    }
}
const mapDispatchToprops = (dispatch) => {
    return bindActionCreators({ fetchProducts ,addToCart}, dispatch)
}

// const mapDispatchToprops =(dispatch)=>{
//     return{
//         fetchProducts :()=>{dispatch(fetchProducts())},
//         addToCart :(id)=>{dispatch(addToCart(id))}

//     }
// }
export default connect(mapStateToProps, mapDispatchToprops)(AllItem)