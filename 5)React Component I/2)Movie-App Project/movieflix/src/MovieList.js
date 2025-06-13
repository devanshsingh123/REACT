import { Component } from "react";
import MovieCard from "./MovieCard";


class MovieList extends Component {
    constructor() {
        //neeed to clla the parent class constructor using super keyword
        super()
        // built-in class object in react , All data is saved in the state
        this.state = {
            movies:[ {
                id:"1",
                title: "The Avengers",
                poster:"https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                plot: `Nick Fury, director of S.H.I.E.L.D., assembles a team of superheroes—including Iron Man, Captain America,
           Thor, Hulk, Black Widow, and Hawkeye—when Loki, Thor’s adoptive brother, steals the powerful Tesseract to open 
           a portal and lead an alien invasion. Despite initial tensions, the heroes unite to stop Loki and save New York City. 
           Their teamwork marks the formation of the Avengers.`,
                price: 199,
                rating: 8.9,
                stars: 0,
                fav: false,
                incart: false
            },
            {
                id:"2",
                title: "Inception",
                poster:"https://m.media-amazon.com/images/I/61gz2gcfkAL._AC_UF894,1000_QL80_.jpg",
                plot: `Dom Cobb is a skilled thief, the best in the dangerous art of extraction: stealing valuable secrets from deep 
           within the subconscious during the dream state. Cobb is offered a chance to have his criminal history erased 
           if he can successfully plant an idea into someone’s mind — a process known as inception.`,
                price: 249,
                rating: 8.8,
                stars: 0,
                fav: false,
                incart: false
            },
            {
                id:"3",
                title: "Interstellar",
                poster:"https://images-cdn.ubuy.co.in/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg",
                plot: `In a future where Earth is becoming uninhabitable, a group of astronauts led by Cooper travel through a wormhole 
           in search of a new home for humanity. The film explores themes of love, time, and survival across galaxies and generations.`,
                price: 299,
                rating: 8.6,
                stars: 0,
                fav: false,
                incart: false
            },
            {
                id:"4",
                title: "The Dark Knight",
                poster:"https://rukminim2.flixcart.com/image/750/900/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8euacqngyh.jpeg?q=90&crop=false",
                plot: `Batman faces his greatest psychological and moral challenges when the anarchist mastermind Joker plunges Gotham City 
           into chaos. As the line between hero and vigilante blurs, Batman must accept the consequences of his actions 
           to protect the city he swore to defend.`,
                price: 199,
                rating: 9.0,
                stars: 0,
                fav: false,
                incart: false
            }
        ]}

        //this.addStars.bind(this);
    }

    handleIncStars=(movie)=>{

       
        const {movies}=  this.state;
         const mid  = movies.indexOf(movie);

          if (movies[mid].stars >= 5) {
            return
        }else{
            movies[mid].stars+=0.5;
        }


        this.setState({
            movies : movies

        })
    }

     handleremoveStars = (movie) => {
        const{movies} = this.state;

        const mid = movies.indexOf(movie);

        //updating the particular element in movies

        if (movies[mid].stars <= 0) {
            return
        }else{
            movies[mid].stars-=0.5;
        }


//setting the updated movies 
        this.setState({
            movies:movies
        })
    }

    handlefav = (movie)=>{

        const{movies} = this.state;

        //updating the fav flag value
        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav;

        //setting the updated movies to current one 
        this.setState({
            movies:movies
        })

    }

    handleCart = (movie)=>{
        const{movies} = this.state;

        const mid = movies.indexOf(movie);

        movies[mid].incart = !movies[mid].incart;

        this.setState({
            movies:movies
        })
    }
   

    render() {
        // console.log(this.state);
        // const{movies} = this.state;
        // console.log(movies);

        return (
            <div className="movie-list">
                {this.state.movies.map((movie) => <MovieCard movie={movie} 
                addStars={this.handleIncStars} 
                removeStars={this.handleremoveStars}
                handlefav={this.handlefav} 
                handleCart={this.handleCart}
                />)}
            </div>
        )
    }
}


export default MovieList;