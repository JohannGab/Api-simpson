import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  GenerateEmployee  from  './Components/GenerateEmployee';
import  DisplayEmployee  from  './Components/DisplayEmployee';
import Simpsons from './Components/Simpsons';
import GenerateSimpsons from './Components/GenerateSimpsons';



// const  sampleEmployee = {
//   gender:  'male',
//   name: {
//       title:  'mr',
//       first:  'mathys',
//       last:  'aubert'
//   },
//   location: {
//       street:  '9467 rue gasparin',
//       city:  'perpignan',
//       postcode:  '90208'
//   },
//   email:  'mathys.aubert@example.com',
//   picture: {
//       medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
//   }
// };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // on peut mettre notre sampleEmployee par défaut
//       // afin d'avoir toujours un employé d'affiché
//       employee:  sampleEmployee
//     };
//   }
//   getEmployee() {
//     // Récupération de l'employé via fetch
//     fetch("https://randomuser.me/api?nat=fr")
//       .then(response  =>  response.json())
//       .then(data  => {
//         // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
//         this.setState({
//           employee:  data.results[0],
//         });
//     });
// }


const  sampleSimpsons = {
  
    "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
    "character": "Nelson Muntz",
    "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    "characterDirection" : "Left"
   }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      simpsons:  sampleSimpsons
    };
  }

getSimpsons() {
  // Récupération de l'employé via fetch
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response  =>  response.json())
    .then(data  => {
      // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
      this.setState({
        simpsons:  data[0],
      });
  });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <br></br>
        {/* <GenerateEmployee  selectEmployee={() =>  this.getEmployee()}  /> <br></br>
        <DisplayEmployee  employee={this.state.employee}  /> */}
        <br></br> <br></br>
        <GenerateSimpsons  selectSimpsons={() =>  this.getSimpsons()}  /> <br></br>
        <Simpsons simpsons={this.state.simpsons} />

      </div>
    );
  }
}

export default App;
