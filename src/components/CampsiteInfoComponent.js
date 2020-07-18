import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, 
    Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody,
    Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const minLength = len => val => val && (val.length >= len);
const maxLength = len => val => !val || (val.length <= len);


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
                <CommentForm/>
            </div>
        )
    } else return <div>No Comments</div>
}

class CommentForm extends Component{
    state = {
        showModal: false,
        rating: '',
        author: '', 
        comment: '',
        touched:{
            rating: false,
            author: false,
            comment: false
        }
    }

    onclickHandler = () => {
        this.togglerModal();
    }
    togglerModal = () => {
        this.setState({...this.state, showModal: !this.state.showModal});
    }
    handleSubmit = (values) => {
        alert(`Current State: ${JSON.stringify(values)}`);
        console.log(`Current State: ${JSON.stringify(values)}`);
    }
    render(){
        return(
            <>
                <Button onClick={() => this.onclickHandler()} outline><i className="fa fa-pencil"/> Submit Comment</Button>
                <Modal isOpen={this.state.showModal}  toggle={() => this.togglerModal()}>
                    <ModalHeader toggle={() => this.togglerModal()}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" md={2} >Rating</Label>
                                <Col md={10}>
                                    <Control.select name="rating"
                                        className="form-control"
                                        model=".rating" 
                                        name="rating"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>                               
                            </div>
                            <div className="form-group" >
                                <Label htmlFor="author" md={10}>Your name</Label>
                                <Col md={10}>
                                <Control.text id="author" 
                                    model=".author" 
                                    name="author"
                                    placeholder="Your Name"
                                    validators={{
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                    }}
                                />
                                <Errors className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be at most 15 characters'
                                    }}
                                />
                                </Col>
                            </div>
                            <div className="form-group" >
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea id="comment" 
                                        model=".comment"
                                        name="comment"
                                        rows="6"
                                        className="form-control"
                                    />
                                </Col>
                            </div>
                            <Row className="form-group" row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Create Comment
                                    </Button>
                                </Col>
                            </Row >
                    </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
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
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={campsite}/>
                    <RenderComments comments={comments}/>
                </div>
            </div>
        )
    } return <div></div>
}
export default CampsiteInfo;