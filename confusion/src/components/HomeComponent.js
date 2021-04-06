import {Card, CardImg, CardText, CardTitle,CardBody,CardSubtitle} from 'reactstrap'
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item,isLoading,errMessage}){
    console.log('Error: '+errMessage);
    if(isLoading){
        return(
            <Loading/>
        );
    }
    else if(errMessage){
        return(
            <h4>{errMessage}</h4>
        );
    }
    else {
        return(
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg src={baseUrl+item.image} alt={item.name}/>
                    <CardBody >
                        <CardTitle>{item.name}</CardTitle>
                        {/* ako designation postoji kreiracemo CardSubtitle ako ne null znaci da nece biti elementa */}
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
    
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading} 
                        errMessage={props.dishesErrMessage}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                         isLoading={props.promosLoading} 
                         errMessage={props.promosErrMessage}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}

export default Home;