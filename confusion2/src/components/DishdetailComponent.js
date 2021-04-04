import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../App.css';
import moment from 'moment'


    
    function RenderComments({comments}) {
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
            return this.renderEmptyDiv()
    }

    function RenderDish({dish}){
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

    function RenderDishAndComments({dish,comments}){
        console.log(dish)
        return(
            <div className="container text-left">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link active >{dish.name}</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2>{dish.name}</h2>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h4 className="bold">Comments</h4>
                        <RenderComments comments = {comments}/>
                    </div>
                </div>
            </div>
        );
    }

    function RenderEmptyDiv(){
        return(<div></div>);
    }

    const DishDetail = (props)=>{
        console.log(props.dish)
        if(props.dish != null){
            return(
                <RenderDishAndComments dish={props.dish} comments={props.comments}/> //return this.renderDishAndComments(this.props.dish)
            );
        }
        else{
            return(
                <RenderEmptyDiv/>//return this.renderEmptyDiv()
            );
        }
    }



export default DishDetail