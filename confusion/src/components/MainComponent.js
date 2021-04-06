import React, { Component} from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {postComment, fetchDishes,fetchPromotions,fetchComments} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) =>{
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) =>({
    postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromotions: () => {dispatch(fetchPromotions())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});

class Main extends Component {

    // constructor(props) {
    //     super(props);   
    // }

    componentDidMount() {
        
        
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchDishes();
    }

    render() {
        const HomePage = () =>{
            return(
                
                <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading = {this.props.dishes.isLoading}
                    dishesErrMessage = {this.props.dishes.errMessage}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading = {this.props.promotions.isLoading}
                    promosErrMessage = {this.props.promotions.errMessage}
                    leader={this.props.leaders.filter((lead) => lead.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) =>{
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                isLoading = {this.props.dishes.isLoading}
                errMessage = {this.props.dishes.errMessage}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
                commentsErrMessage = {this.props.comments.errMessage}
                postComment={this.props.postComment}/>
            );
        }

        const AboutUs = () =>{
            return(
                <About leaders={this.props.leaders}/>
            );
        }

        return (
        <div className="App text-left">
            <Header/>
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={500}>
                    <Switch location={this.props.location}>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/contact-us" component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm}/>} />
                        <Route exact path="/about-us" component={AboutUs} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}/>
                        <Route path="/menu/:dishId" component={DishWithId}/>
                        <Redirect to='/home' />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>
        </div>
 
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
