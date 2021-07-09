import { useEffect, useCallback } from 'react';
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { Orders } from './components/Orders/Orders';
import { Loader } from './components/Loader/Loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Checkout, Login, Register } from './routes';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/products/products-action';
import AddProduct from './routes/AddProduct';

function App() {
  const dispatch = useDispatch();
  let loading = useSelector((state) => state.products.load);

  const loadProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <>
      {loading && <Loader />}
      <Router>
        <GlobalStyle />
        <Navbar />
        <Orders />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/addprod" component={AddProduct} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
