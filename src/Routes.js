import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AdminContextProvider from './contexts/AdminContext';
import AuthContext from './contexts/AuthContext';
import EditProduct from './components/Admin/EditProduct';
import AdminMain from './components/Admin/AdminMain';
// import Cart from './components/Cart/Cart';
import ProductDetails from './components/Products/ProductDetails';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import CreditCard from './components/CreditCard/CreditCard';
import FavoriteHeader from '../src/components/FavoriteHeader/FavoriteHeader';
import CartHeader from './components/CartHeader/CartHeader';



const Routes = () => {
    return (
        <AdminContextProvider>
            <BrowserRouter>
                <Switch>
                    <AuthContext>
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                    </AuthContext>
                </Switch>
                <Switch>
                    <Route exact path="/Admin" component={AdminMain} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/details/:id" component={ProductDetails}/>
                    <Route exact path="/edit" component={EditProduct} />
                    {/* <Route exact path="/cart" component={Cart}/> */}
                    <Route exact path="/cart" component={CartHeader}/>
                    <Route exact path="/favorite" component={FavoriteHeader} />
                    <Route exact path="/payment" component={CreditCard} />
                </Switch>
            </BrowserRouter>
        </AdminContextProvider>
    );
};

export default Routes;