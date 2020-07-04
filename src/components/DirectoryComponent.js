import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
    state={
        selectedCampsite : null
    }
    
    onCampsiteSelect(campsite) {
        this.setState({ selectedCampsite: campsite });
    }

    // renderSelectedCampsite(campsite) {
    //     if (campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     }else{
    //         return <div/>;
    //     }
    // }

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div className="col-md-5 m-1" key={campsite.id}>
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* <div className="col-md-5  m-1">
                    {this.renderSelectedCampsite(this.state.selectedCampsite)}
                </div> */}
                <CampsiteInfo campsite={this.state.selectedCampsite}/>
            </div>
        );
    }
}

export default Directory;