import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderComments({comments}){
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {/* map returns <> into the DOM? so there is no need to assign map to anything  */}
                {comments.map(comment => {
                    return (
                        <> {/* react basic container? */}
                            <p>{comment.text}</p>
                            <p>{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </>
                    )
                })}
            </div>
        )
    } else return <div>No Comments</div>
}

function RenderCampsite({campsite}) {
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
function CampsiteInfo(props) {
    if (props.campsite) {
        const {campsite, comments} = props;// to get access to props.campsite.commens -> campsite: {comments}
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={campsite}/>
                    <RenderComments comments={comments}/>
                </div>
            </div>
        )
    } return <div></div>
}
export default CampsiteInfo;