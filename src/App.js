import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import ViewCookbook from './Components/ViewCookbook/ViewCookbook';
import ViewRecipe from './Components/ViewRecipe/ViewRecipe';
import FuseRecipe from './Components/FuseRecipe/FuseRecipe';
import FusionNav from './Components/FusionNav/FusionNav';


class App extends Component {
  render() {
    return (
      <main className='App'>

        <nav role="navigation" className="Main_Nav">
          <FusionNav/>
        </nav>

        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegistrationPage}/>
          <Route path="/your-cookbook" component={ViewCookbook}/>
          <Route path="/view-recipe" component={ViewRecipe}/>
          <Route path="/fuse" component={FuseRecipe}/>
        </Switch>
      </main>
    );
  }
}

export default App;