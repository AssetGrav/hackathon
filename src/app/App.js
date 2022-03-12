import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Favourites from "./components/page/favourites";
import Home from "./components/page/home";
import NavBar from "./components/common/navbar";
import { data } from "./api/fake_api";
import UserProfile from "./components/page/userProfile";

function App() {
    const [users] = useState(data);

    return (
        <div className="App">
            <NavBar users={users} />
            {/* <h1>Haсkathon</h1> */}
            <Switch>
                <Route
                    path="/"
                    exact
                    render={(props) => <Home users={users} />}
                />
                <Route path="/favourites" render={(props) => <Favourites />} />
                <Route path="/:id" render={(props) => <UserProfile />} />
            </Switch>
        </div>
    );
}

export default App;
