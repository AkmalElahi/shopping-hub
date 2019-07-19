import React , {Component}from 'react'
import SellItem from '../components/sell-item';

//import {bindActionCreators}from 'redux'
//import {connect} from 'react-redux'
//import {getItems} from '../actions'
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            keyword:'',
            render:false
        }
    }

    // searchItems = (event)=>{
    //     event.preventDefault()
    //     this.props.getItems(this.state.keyword)
    //     }
    
    renderSell = ()=>{
                
               return(
                   <div>
                       <SellItem />
                   </div>
               )
}
handleClick=()=>{
    this.setState({render:true})
    this.renderSell()
}
    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
    }

    componentDidMount(){
        console.log(this.state)
    }
    render() { 
        const renderSell = this.renderSell()
        return (
            <div className="main_search">
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
<ul className="navbar-nav mr-auto">
  <li><Link to='/' className="nav-link"> Home </Link></li>
  <li><Link to={'/cart'} className="nav-link">Cart</Link></li>
  <li><Link to={'/about'} className="nav-link">About</Link></li>
</ul>
</nav>
                </div>
                <div>
                    <button onClick={this.handleClick}>Sell</button>
                    {this.state.render && renderSell}
                </div>
                <form onSubmit={this.searchItems}>
                    <input type="text" placeholder="search for the item" value={this.state.keyword} onChange={this.handleChange}/>
                </form>
            </div>
          );
    }

}
// const  mapDispatchToProps = (dispatch)=>{
//      return bindActionCreators({getItems},dispatch)
//  }
// export default connect(null,mapDispatchToProps)(Search);
export default Search