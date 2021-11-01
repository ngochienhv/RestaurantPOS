import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/product_list";
import { Provider } from "./components/products/content";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      <Provider>
        <Router>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product_list" exact component={ProductList} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
