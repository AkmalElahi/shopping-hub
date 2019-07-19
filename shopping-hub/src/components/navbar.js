import React from 'react';
import { Link } from 'react-router-dom';
const NAvbar = () => {
    return (
        <div>
            <nav className="nav-wrapper">
                <div className='container'>
                    <Link to="/" className="brand-logo">Shopping</Link>
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><a class="btn-floating btn-medium  waves-effect waves-light teal">
                            <i class="material-icons">shopping_cart</i>
                        </a></Link></li>
                    </ul>

                </div>

            </nav>
            {/* <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
<i class="material-icons">add</i>
      </a> */}

        </div>
        //           <nav class="nav-extended">
        //     <div class="nav-wrapper">
        //       <a href="#!" class="brand-logo">Logo</a>
        //       <ul class="right hide-on-med-and-down">
        //         <li><a>A link</a></li>
        //         <li><a>A second link</a></li>
        //         <li><a>A third link</a></li>
        //       </ul>
        //     </div>
        //     <div class="nav-content">
        //       <span class="nav-title">Title</span>
        //       <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
        //         <i class="material-icons">add</i>
        //       </a>
        //     </div>
        //   </nav>
    )
}

export default NAvbar;