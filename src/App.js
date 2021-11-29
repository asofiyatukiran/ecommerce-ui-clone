import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import Mans from './Components/Mans';
import Woman from './Components/Woman';
import { Switch, Route, Redirect} from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Item from './Item'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/item" component={Item} />
        <Route exact path="/man" component={Mans} />
        <Route exact path="/woman" component={Woman} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/"/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
