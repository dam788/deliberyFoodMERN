import { useEffect, useCallback, useState } from 'react';
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { Orders } from './components/Orders/Orders';
import { Loader } from './components/Loader/Loader';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home, Checkout, Login, Register } from './routes';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/products/products-action';
import { fetchCategories } from './redux/categories/categories-action';
import AddProduct from './routes/AddProduct';

function App() {
  const [activeUser, setActiveUser] = useState(false);
  const [user, setUser] = useState({})


  const dispatch = useDispatch();
  let loading = useSelector((state) => state.products.load);

  const loadProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const loadCategories = useCallback(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  useEffect(() => {
    loadProducts();
    loadCategories();
  }, [loadProducts,loadCategories]);

  return  (
    <>
      {loading && <Loader />}
      <Router>
        <GlobalStyle />
        <Navbar />
        <Orders />
        <Switch>

          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path='/'>
          {!activeUser ? <Redirect to="/login" /> :  <Home activeUser={activeUser} setActiveUser={setActiveUser}/>}           
          </Route>

          <Route path="/checkout" component={Checkout} />
          {/* <Route path="/login" component={Login} /> */}

          <Route exact path='/login'>

            <Login activeUser={activeUser} setActiveUser={setActiveUser} user={user} setUser={setUser} />
          </Route>
          <Route path="/register" component={Register} />

          {/* <Route path="/addproduct" component={AddProduct} /> */}
          {!activeUser ? <Redirect to="/login" /> :  <AddProduct activeUser={activeUser} setActiveUser={setActiveUser}/>}
        </Switch>
      </Router>
    </>
  ) 
}

export default App;
