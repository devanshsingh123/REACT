import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          photos: data,
          loading: false
        })
      )
      .catch((error) => {
        console.error("Error fetching photos:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, photos } = this.state;

    return (
      <div className="App">
        {loading ? (
          <p>Loading...</p>
        ) : (
          photos.map((photo) => <Image key={photo.id} photo={photo} />)
        )}
      </div>
    );
  }
}
