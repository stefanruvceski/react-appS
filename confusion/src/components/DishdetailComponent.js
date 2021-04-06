import React, { Component} from 'react';
import {Card, Modal, Label, ModalBody, ModalHeader, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem, Button} from 'reactstrap'
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import '../App.css';
import moment from 'moment'
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
    
    function RenderComments({comments}) {
        const comm = comments.map((c)=>{
            return(
                <Stagger in>
                        {comments.map((comment) => {
                            return (
                    <Fade in>
                        <li key={c.id} >
                            <p>{c.comment}</p>
                            <p >--{c.author}, {moment(c.date).format("MMM DD, YYYY")}</p>
                        </li>
                    </Fade>
                  );
                })}
                </Stagger>
            );
        });

        if (comments != null)
            return(
                <ul className="list-unstyled">
                    {comm}
                </ul>
            );
        else
            return this.renderEmptyDiv()
    }

    function RenderDish({dish}){
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg width="100%" src={baseUrl +dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle className="bold">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => (val) && (val.length >= len);
class DishDetail extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen:false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("Current state is : " + JSON.stringify(values) + this.props.dishId)
        this.props.postComment(this.props.dish.id, values.rating, values.name, values.comment);
        this.toggleModal();
    }
    toggleModal(){
      
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        if(this.props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if (this.props.errMessage){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMessage}</h4>
                    </div>
                </div>
            );
        }
        else if(this.props.dish != null){
            return(
                <div className="container text-left">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link active="true" to="/" >{this.props.dish.name}</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>{this.props.dish.name}</h2>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={this.props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1" >
                            <h4 className="bold">Comments</h4>
                            <RenderComments comments={this.props.comments}/>
                            <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-edit fa-lg"/> Submit Comment 
                            </Button>
                        </div>
                    
                    </div>
                    <Modal isOpen={this.state.isModalOpen} >
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" >Rating</Label>
                                <Control.select model=".rating" name="rating" 
                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>   
                            </div>
                            <div className="form-group mt-2">
                                <Label htmlFor="name" >Your Name</Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name" 
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                        placeholder="Name" 
                                        className="form-control"
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be grater that 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                            </div>
                            <div className="form-group mt-2">
                                <Label htmlFor="comment" >Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </div>
                                
                            </LocalForm>
                        </ModalBody>
                    </Modal>

                </div>
                
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail