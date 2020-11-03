import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

//components
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';
import Landing from '../../components/Landing/Landing';


function NavBar (){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Ecommerce</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/cart">My Cart</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                    <Route path="/products">
                        <Product />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default NavBar;