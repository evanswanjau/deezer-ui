import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { ArtistPage } from "./pages/artist";

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/artist/:name" component={ArtistPage} />
                <Route exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
};
