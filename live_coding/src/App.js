import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state ={
      cnt:1,
      users:[],
      nextPage: 1
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    console.log('Currect page ', this.state.nextPage)
    fetch('https://randomuser.me/api?page=' + this.state.nextPage)
      .then(response => response.json())
      .then(response => {
        console.log('Pages from response ', response.info.page)
        const result = response.results[0]
        
        this.setState({
          users: this.state.users.concat({name:result.name.first + ' ' + result.name.lastname, img: result.picture.large}),
          nextPage: response.info.page+1
        })
      })
      .catch(err => console.error(err.message))
  }


  clicked() {
    
    this.setState({
      cnt: this.state.cnt+1
    });
    this.fetchData();
  }

  

  render(){
    return (
      <div className="App container">
       
          <button className="transparent" onClick={() => this.clicked()}>
          <img  src={logo} className="App-logo" alt="logo" />
          </button>
         
         
          <p>
            {this.state.cnt}
            <div className="row ">
        {this.state.users.map((user) =>{
          return(
           
            <div className="col-2 mx-auto card p-3">
              <h3>{user.name}</h3>
              <img src={user.img} alt={user.name}/>
            </div>
          )
        })}
        </div>
    
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
     
      </div>
    );
  }
}

export default App;
