import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/Header.jsx'


function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      </Switch>
       
    </div>
  );
}

export default App;
