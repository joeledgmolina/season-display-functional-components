import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  getRenderContent() {
    if (this.state.errorMessage !== "") {
      return <div>Error: {this.state.errorMessage}</div>;
    } 

    if (this.state.lat !== null) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Debes compartir tu geolocalización" />;
  }

  render() {
    return <div>{this.getRenderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
