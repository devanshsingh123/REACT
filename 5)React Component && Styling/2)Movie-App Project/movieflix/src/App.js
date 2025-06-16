
import MovieList from "./MovieList";
import Student from "./propsExample";
import Navbar from "./Navbar";
import {movies}  from "./moviesData";
import { Component } from "react";



export default class App extends Component {

  constructor(){
     super();
            this.state = {
            movies:movies,
            cartCount:0
        }
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
        let{movies,cartCount} = this.state;
        
        

        const mid = movies.indexOf(movie);

        movies[mid].incart = !movies[mid].incart;

        if(movies[mid].incart){
            cartCount+=1;
        }else{
            cartCount-=1;
        }

        // const count = movies.filter((movie)=>movie.incart === true).length
        this.setState({
            movies,
            cartCount
        })
    }

  render(){
    
    return (
    <>
    <Navbar  cartCount={this.state.cartCount}/>
    <MovieList movies={this.state.movies}
                addStars={this.handleIncStars} 
                removeStars={this.handleremoveStars}
                handlefav={this.handlefav} 
                handleCart={this.handleCart}
                />
    {/* <Heading/> */}
    {/* <Student name="Devansh" marks={98}/>
    <Student name="Raj" marks={98}/>
    <Student name="Rohan" marks={98}/>
    <Student  /> Example of showing default props if you forget passing it */}
    </>
  );
}
}

Student.defaultProps ={
  name:"Student",
  marks:"NA"
}

