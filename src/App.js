
import "./App.css"

import Blog from "./components/index"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/blog" component={Blog}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
