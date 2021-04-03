import React, { Component} from 'react'
import {Card, CardImg, 
    CardText, CardBody, CardTitle} from 'reactstrap'
    import '../App.css';
    import moment from 'moment'

class Dishdetail extends Component{
    
    //kad god se deklasire nova komponenta uvek mora
    //konstruktor i props ka superklasi
    // constructor(props){
    //     super(props);
    // }

    renderComments(comments) {
        const comm = comments.map((c)=>{
            return(
                <li key={c.id} >
                    <p>{c.comment}</p>
                    <p >--{c.author}, {moment(c.date).format("MMM DD, YYYY")}</p>
                </li>
            );
        });

        if (comments != null)
            return(
                <ul className="list-unstyled">
                    {comm}
                </ul>
            );
        else
            return(
                <div></div>
            );
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle className="bold">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderDishAndComments(dish){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1" >
                    <h4 className="bold">Comments</h4>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }

    renderEmptyDiv(){
        return(<div></div>);
    }

    render(){
        if(this.props.dish != null){
            return this.renderDishAndComments(this.props.dish)
        }
        else{
            return this.renderEmptyDiv()
        }
    }

}

export default Dishdetail