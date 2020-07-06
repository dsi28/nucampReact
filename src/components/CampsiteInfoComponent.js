import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    renderComments(comments){
        if(comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {/* map returns <> into the DOM? so there is no need to assign map to anything  */}
                    {comments.map(comment => {
                        return (
                        <> {/* react basic container? */}
                            <p>{comment.text}</p>
                            <p>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </>
                        )
                    })}
                </div>
            )
        } else return <div>blank</div>
    }
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">             
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    render() {
        if (this.props.campsite) {
            const campsite = this.props.campsite; // research how can I do both in one line? 
            const {comments} = campsite; //destruct campsite props to make it easier to access comments
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(campsite)}
                        {this.renderComments(comments)}
                    </div>
                </div>
            )
        } return <div></div>
    }
}
export default CampsiteInfo;