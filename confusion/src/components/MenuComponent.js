import {Card, CardImg, CardImgOverlay,  CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';

function RenderMenuItem({dish}){
    return(
        <Card>
            <Link to= {`/menu/${dish.id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                <CardImgOverlay >
                    <CardTitle heading="true" className="bold">{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) =>{
    const menu = props.dishes.dishes.map((dish)=>{
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} />
            </div>
        );
    });

    if(props.dishes.isLoading){
        return(
            <div>
            <div className="about">
               <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                  <span className="icon"></span>
               </a>
               <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                  <span className="icon"></span>
               </a>
               <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                  <span className="icon"></span>
               </a>
               <a className="bg_links logo"></a>
            </div>
            
            <div className="content">
               <div className="loading">
            <p>loading</p>
                  <span></span>
               </div>
            </div>
            </div>
        );
    }
    else if (props.dishes.errMessage){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMessage}</h4>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="container" style={{textAlign: 'left'}}>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link active="true" to="#" >Menu</Link>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>Menu</h2>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>     
                  
            </div>
        );
    }
    

}

export default Menu