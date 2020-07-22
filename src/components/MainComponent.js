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
import { addComment, fetchCampsites } from '../redux/ActionCreators';

//get state from redux
const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const mapDispatchToProps = {
    // for this arrow function why are () used instead of brackets? since only addComment function call is being retuned?
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
    fetchCampsites: () => (fetchCampsites())
}

class Main extends Component {

    //called as soon as component is mounted onto the dom. before render????
    componentDidMount(){
        this.props.fetchCampsites();
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    campsite={this.props.campsites.campsites.filter(campsite =>{ return campsite.featured===true})[0]}
                    campsitesLoading={this.props.campsites.isLoading}
                    campsitesErrMess={this.props.campsites.errMess}
                    partner={this.props.partners.filter(partner =>{ return partner.featured===true})[0]}
                    promotion={this.props.promotions.filter(promotion =>{ return promotion.featured===true})[0]}
                />
            )
        }
        const CampsiteWithId = ({match})=>{
            return(
                <CampsiteInfo 
                    campsite={this.props.campsites.campsites.filter(campsite =>{ return campsite.id === +match.params.campsiteId })[0]}
                    isLoading={this.props.campsites.isLoading}
                    errMess={this.props.campsites.errMess}
                    comments={this.props.comments.filter(comments =>{ return comments.campsiteId === +match.params.campsiteId })}
                    addComment={this.props.addComment}
                /> 
            )
        }
{/* Any routing request will got through the swtich component until it finds a matching path(route). Route acts like a case */}
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/contactus' component={Contact} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId}/>
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites}/>}/>
                    <Route path='/aboutus' render={()=> <About partners={this.props.partners}/>}/>
                    <Redirect to='/home'/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
//connect: allows main component to get state from redux store
// having mapDispatchToProps allows the actions to be avlible in the mainComponent(in this case) as a prop
//withRouter allows router to still work after changes to export