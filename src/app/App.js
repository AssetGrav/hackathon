import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Favorites from "./components/page/favorites";
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
                <Route path="/favorites" render={(props) => <Favorites />} />
                <Route
                    path="/:id"
                    render={(props) => <UserProfile users={users} {...props} />}
                />
            </Switch>
        </div>
    );
}

export default App;
