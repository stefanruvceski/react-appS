import React, { Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
         Button, Modal,ModalHeader,ModalBody, FormGroup,Form,Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isModalOpen:false
        }
        //bindovanje funkcije i propretija
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "\nPassword: " + this.password.value);
        event.preventDefault();
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/home">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Fusion"/>
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about-us">
                                        <span className="fa fa-info fa-lg"/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact-us">
                                        <span className="fa fa-address-card fa-lg"/>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"/> Login 
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>                     
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, 
                                    and create a unique fusion experience. 
                                    Out lipsmacking creations will tickle tour culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" innerRef={(input) => this.username=input} id="username" name="username">Username</Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Username</Label>
                                <Input type="password" innerRef={(input) => this.password=input} id="password" name="password">Password</Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label ckeck>
                                    <Input type="checkbox" name="remember"/>
                                    Remember Me
                                </Label>
                            </FormGroup>
                            
                            <Button type="submit" value="submit" className="bg-primary mt-2">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;