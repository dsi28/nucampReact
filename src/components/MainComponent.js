import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    state = {
        campsites: CAMPSITES,
        selectedCampsite : null
    };
    onCampsiteSelect(campsiteId) {
        this.setState({ selectedCampsite: campsiteId });
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
                {/* the [0] at the end of the filter method returns the first object in the array that filter returns. filter does not return an object */}
            </div>
        );
    }
}
export default Main;