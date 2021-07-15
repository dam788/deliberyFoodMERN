import { useEffect, useCallback, useState } from 'react';
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle';
import  Navbar  from './components/Navbar/Navbar';
import { Orders } from './components/Orders/Orders';
import { Loader } from './components/Loader/Loader';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Home, Checkout, Register } from './routes';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/products/products-action';
import { fetchCategories } from './redux/categories/categories-action';
import AddProduct from './routes/AddProduct';

function App() {

  // console.log(process.env.REACT_APP_MP_ACCESS_TOKEN)
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

//para ver si hay un usuario en localstorage, hay q buscarlo en mongo
  useEffect(() => {
    if (localStorage.getItem('usuario')){
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'));
      setUser(usuarioStorage)
      setActiveUser(true)
    }
  }, [])


  useEffect(() => {
    loadProducts();
    loadCategories();
  }, [loadProducts,loadCategories]);

  return  (
    <>
      {loading && <Loader />}
      <Router>
        <GlobalStyle />
        <Navbar activeUser={activeUser} user={user} setUser={setUser} setActiveUser={setActiveUser} />
        <Orders />
        <Switch>
          <Route exact path='/'>
          <Home activeUser={activeUser} setActiveUser={setActiveUser}/>           
          </Route>
          <Route path="/checkout" component={Checkout} />
          <Route exact path='/login'>
          <Register activeUser={activeUser} setActiveUser={setActiveUser} user={user} setUser={setUser} />
          </Route>
          {/* <Route exact path='/register'>
            <Register activeUser={activeUser} setActiveUser={setActiveUser} user={user} setUser={setUser} />
          </Route> */}
          {!activeUser ? <Redirect to="/login" /> : <AddProduct activeUser={activeUser} setActiveUser={setActiveUser}/>}
        </Switch>
      </Router>
    </>
  ) 
}

export default App;
