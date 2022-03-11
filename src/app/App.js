import { Route, Switch } from "react-router-dom";
import Card from "./components/card";
import Favourites from "./components/favourites";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Hakaton</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/card" component={Card} />
        <Route path="/favourites" component={Favourites}/>
      </Switch>
    </div>
  );
}

export default App;
