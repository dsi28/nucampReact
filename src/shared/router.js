import React from 'react';
import Home from '../components/HomeComponent';
import Contact from '../components/ContactComponent';
import About from '../components/AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom'; // set up router so users can be sent to the correct location


export default (

    <Switch>
    <Route path='/home' component={HomePage}/>
    <Route path='/contactus' component={Contact} />
    <Route path='/directory/:campsiteId' component={CampsiteWithId}/>
    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites}/>}/>
    <Route path='/aboutus' render={()=> <About partners={this.state.partners}/>}/>
    <Redirect to='/home'/>
</Switch>
)
   
