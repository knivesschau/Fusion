import React, { Component } from 'react';
import config from './config';
import fusionContext from './fusionContext';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import ViewCookbook from './Components/ViewCookbook/ViewCookbook';
import ViewRecipe from './Components/ViewRecipe/ViewRecipe';
import FuseRecipe from './Components/FuseRecipe/FuseRecipe';
import BaseViewer from './Components/BaseViewer/BaseViewer';
import FusionNav from './Components/FusionNav/FusionNav';
import PickStarter from './Components/PickStarter/PickStarter';

class App extends Component {
  state = {
    fusions: [],
    bases: [],
    cuisines: []
  };

  // on app initialization, grab all data from API. 
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/recipes`), // user made/created fusion recipes, dynamic data. 
      fetch(`${config.API_ENDPOINT}/bases`), // static data for starting base recipes 
      fetch(`${config.API_ENDPOINT}/cuisines`) // static data for cuisine styles 
    ])
      .then(([res1, res2, res3]) => { 
        if ([!res1, !res2, !res3].ok) {
          return Promise.all([res1.json(), res2.json(), res3.json()]).then(e => Promise.reject(e));
        }
        return Promise.all([res1.json(), res2.json(), res3.json()]);
      })
      .then(([res1, res2, res3]) => {
        this.setState({
          fusions: res1
        });

        this.setState({
          bases: res2
        });

        this.setState({
          cuisines: res3
        });
      })
      .catch(error => {
        console.error({error})
      });
  };

  handleAddFusion = (newFusion) => {
    this.setState({
      fusions: [
        ...this.state.fusions,
        newFusion
      ]
    });
  };

  handleDeleteFusion = fused_id => {
    this.setState({
      fusions: this.state.fusions.filter(fusion => fusion.fused_id !== fused_id)
    });
  };

  handleUpdateFusion = updatedFusion => {
    const updatedFusions = this.state.fusions.map(fusion => fusion.fused_id === updatedFusion.fused_id ? updatedFusion : fusion);

    this.setState({
      fusions: updatedFusions
    });
  };

  render() {
    const recipeValues = {
      fusions: this.state.fusions, 
      cuisines: this.state.cuisines, 
      bases: this.state.bases,
      addFusion: this.handleAddFusion,
      deleteFusion: this.handleDeleteFusion,
      updateFusion: this.handleUpdateFusion
    };

    return (
      <fusionContext.Provider value={recipeValues}>
        
        <main className='App'>

          <nav role="navigation" className="Main_Nav">
            <FusionNav/>
          </nav>

          <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegistrationPage}/>
            <Route path="/your-cookbook" component={ViewCookbook}/>
            <Route path="/view-recipe/:fused_id" component={ViewRecipe}/>
            <Route path="/starter-recipes" component={PickStarter}/>
            <Route path="/bases/:recipe_id" component={BaseViewer}/>
            <Route path="/fuse/:recipe_id" component={FuseRecipe}/>
          </Switch>
        </main>

      </fusionContext.Provider>
    );
  };
};

export default App;