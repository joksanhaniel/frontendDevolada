import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPageView from "./views/LandingPage";
import Login from "./views/Login";
import SingIN from "./views/SingIn";
import Customer  from "./views/AppCustomer"
import Chauffeur  from "./views/AppChauffeur"
import Manager  from "./views/AppManager"

const App:React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/myapp" exact component = {LandingPageView}/>
      <Route path="/Login" exact component = {Login}/>
      <Route path="/SingIN" exact component = {SingIN}/>
      <Route path="/appCustomer/Category" exact component = {Customer}/>
      <Route path="/appCustomer/Company" exact component = {Customer}/>
      <Route path="/appManager" exact component = {Manager}/>
      <Route path="/appDriver" exact component = {Chauffeur}/>
    </Switch>
  </BrowserRouter>
)
export default App;
