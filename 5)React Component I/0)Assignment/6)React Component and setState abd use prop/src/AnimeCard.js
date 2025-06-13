import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const {src,name} = this.props;
    return <div className="anime-card">
      <img src={src} alt={name} />
        <p>{name}</p>
    </div>;
  }
}

export default AnimeCard;
