import React from 'react';
import Login from './Login';
import Registration from './Registration';
import Fp from './Fp';
import NewPass from "./NewPass";
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
function App(){
    return(
    <Router>
        <>   
            <Switch>
            <Route  exact path="/" component={Login}/>
            <Route path="/fp" component={Fp}/>
            <Route path="/reg" component={Registration}/>
            <Route path="/newpass" component={NewPass}/>
            </Switch>
        </>
    </Router>
    );                                                                  
    }
export default App;