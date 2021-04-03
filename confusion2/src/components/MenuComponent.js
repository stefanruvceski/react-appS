import React, { Component} from 'react'
import {Card, CardImg, CardImgOverlay,  CardTitle} from 'reactstrap'
import Dishdetail from 'D:/GitHub/react-app/confusion2/src/components/DishdetailComponent'

class Menu extends Component{
    
    //kad god se deklasire nova komponenta uvek mora
    //konstruktor i props ka superklasi
    constructor(props){
        super(props);

        this.state={
            selectedDish:null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() =>this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay >
                            <CardTitle heading className="bold">{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container" style={{textAlign: 'left'}}>
                <div className="row">
                    {menu}
                </div>
                <Dishdetail dish = {this.state.selectedDish}/>
                   
            </div>
        );
    }

    

  

}

export default Menu