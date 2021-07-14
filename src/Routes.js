import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Dashboard/HomePage";
import Riders from "./pages/Riders/Riders";
// import Login from "./pages/Login/Login";

// import OrderDetailsPage from "./pages/Orders/OrderDetailsPage/OrderDetailsPage";
function Routes() {
  return (
    <Router>
      <Header>
        <Switch>
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/" component={Homepage} />
          <Route exact path="/riders" component={Riders} />
        </Switch>
      </Header>
    </Router>
  );
}

export default Routes;
