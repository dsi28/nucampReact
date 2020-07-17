import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; // set up router so users can be sent to the correct location
import { connect } from 'react-redux';

//get state from redux
const mapStateToProps = state => {
    return {
        campsite: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    }
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return(
                <Home 
                    campsite={this.props.campsites.filter(campsite =>{ return campsite.featured===true})[0]}
                    partner={this.props.partners.filter(partner =>{ return partner.featured===true})[0]}
                    promotion={this.props.promotions.filter(promotion =>{ return promotion.featured===true})[0]}
                />
            )
        }
        const CampsiteWithId = ({match})=>{
            return(
                <CampsiteInfo 
                    campsite={this.props.campsites.filter(campsite =>{ return campsite.id === +match.params.campsiteId })[0]}
                    comments={this.props.comments.filter(comments =>{ return comments.campsiteId === +match.params.campsiteId })}
                /> 
            )
        }

        return (
            <div>
                <Header/>
                {/* Any routing request will got through the swtich component until it finds a matching path(route). Route acts like a case */}
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/contactus' component={Contact} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId}/>
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites}/>}/>
                    <Route path='/aboutus' render={()=> <About partners={this.props.partners}/>}/>
                    <Redirect to='/home'/>
                </Switch>
                {/* <CampsiteInfo campsite={this.props.campsites.filter(campsite => campsite.id === this.props.selectedCampsite)[0]}/>
                the [0] at the end of the filter method returns the first object in the array that filter returns. filter does not return an object */}
                <Footer/>
            </div>
        );
    }
}
//connect: allows main component to get state from redux store
//withRouter allows router to still work after changes to export
export default withRouter(connect(mapStateToProps)(Main));