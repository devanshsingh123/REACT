import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const data = this.props;
    const{anime} = data;
    //console.log(this.props)
    return <div className="anime-list">
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
      {anime.map((a)=>{
        return <AnimeCard key={a.name} src={a.image} name={a.name}/>
      })}
    </div>;
  }
}

export default AnimeList;
