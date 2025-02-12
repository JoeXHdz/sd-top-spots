import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

// Header Style
const jumbotronStyle = {
  padding: '2rem 1rem',
  marginBottom: '2rem',
  backgroundColor: '#007bff',
  color: 'white',
  textAlign: 'center',
};


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://ccc.helloworldbox.com/items/top_spots')
      .then((response) => {
        console.log(response.data);
        const topspots = Array.isArray(response.data.data) ? response.data.data : [];
        console.log("Topspots Data:", topspots);
        this.setState({ topspots });
      })
      .catch((error) => console.error("Error fetching top spots:", error));
  }
  

  render() {
    return (
      <div className="App">
        <header className="jumbotron text-center" style={jumbotronStyle}>
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
        </header>
  
        <div className="container mt-4">
          {this.state.topspots.length > 0 ? (
            <div className="row flex">
              {this.state.topspots.map((topspot) => (
                <div className="col-md-4" key={topspot.id}>
                  <TopSpot
                    name={topspot.name}
                    description={topspot.description}
                    location={topspot.location}
                    lat={topspot.location[0]} 
                    lon={topspot.location[1]} 
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>Loading or no top spots available.</p>
          )}
        </div>
      </div>
    );
  }
  
}

export default App;
