import React from 'react';
import './App.css';
import { fetchPeople, fetchSpecies } from "./requests";
import { BarChart } from "./chart/bar";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      people: null,
      species: null
    }
  }

  setPeople() {
    fetchPeople()
      .then(res => {
        const people = res.data.results.map(peopleObject =>{
          peopleObject.height = Number(peopleObject.height);
          return peopleObject;
        });
        console.log("result", people);

        this.setState({ people })
      })
      .catch(err => console.log("Fetch people error: ", err));
  }

  setSpecies() {
    fetchSpecies()
      .then(species => this.setState({ species: species.data}))
      .catch(err => console.log("Fetch species error: ", err));
  }

  componentDidMount() {
    this.setPeople();
    this.setSpecies();
  }

  render(){

    const { people } = this.state;

    return (
      <div className="App">
        {people && <BarChart people={people} />}
      </div>
    );
  }
}

export default App;
