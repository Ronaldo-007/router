
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './container/Navbar';
import  Page404  from './container/Page404/Page404';
import Contactus from './pages/Contactus';
import Designer from './pages/Designer';
import Menu from './pages/Menu';
import News from './pages/News';
import ONas from './pages/O Nas';
import Production from './pages/Production';
import Products from './pages/Products';
import Services from './pages/Services';

let pages = [
{paht: "/", component: <Menu/>, exact: true},
{paht: "/onas", component: <ONas/>},
{paht: "/production", component: <Production/>},
{paht: "/services", component: <Services/>},
{paht: "/products", component: <Products/>},
{paht: "/designer", component: <Designer/>},
{paht: "/news", component: <News/>},
{paht: "/contactus", component: <Contactus/>},
{component: < Page404 />}

]


function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          {pages.map((page, index) => {
            return <Route path={page.paht} exact={page.exact} key={page.paht}>
              {page.component}
            </Route>
          })}
        </Switch>
     
    </div>
  );
}

export default App;
