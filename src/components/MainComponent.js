import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'; // set up router so users can be sent to the correct location
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    state = {
        campsites: CAMPSITES
    };
    render() {
        const HomePage = () => {
            return(
                <Home />
            )
        }
        return (
            <div>
                <Header/>
                {/* Any routing request will got through the swtich component until it finds a matching path(route). Route acts like a case */}
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/directory' render={() => <Directory campsites={this.state.campsites}/>}/>
                    <Redirect to='/home'/>
                </Switch>
                {/* <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
                the [0] at the end of the filter method returns the first object in the array that filter returns. filter does not return an object */}
                <Footer/>
            </div>
        );
    }
}
export default Main;