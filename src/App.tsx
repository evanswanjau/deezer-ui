import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
