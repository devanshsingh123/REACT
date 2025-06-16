
import MovieCard from "./MovieCard";


function MovieList(props) {


    //     handleIncStars=(movie)=>{


    //         const {movies}=  this.state;
    //          const mid  = movies.indexOf(movie);

    //           if (movies[mid].stars >= 5) {
    //             return
    //         }else{
    //             movies[mid].stars+=0.5;
    //         }


    //         this.setState({
    //             movies : movies

    //         })
    //     }

    //      handleremoveStars = (movie) => {
    //         const{movies} = this.state;

    //         const mid = movies.indexOf(movie);

    //         //updating the particular element in movies

    //         if (movies[mid].stars <= 0) {
    //             return
    //         }else{
    //             movies[mid].stars-=0.5;
    //         }


    // //setting the updated movies 
    //         this.setState({
    //             movies:movies
    //         })
    //     }

    //     handlefav = (movie)=>{

    //         const{movies} = this.state;

    //         //updating the fav flag value
    //         const mid = movies.indexOf(movie);
    //         movies[mid].fav = !movies[mid].fav;

    //         //setting the updated movies to current one 
    //         this.setState({
    //             movies:movies
    //         })

    //     }

    //     handleCart = (movie)=>{
    //         const{movies} = this.state;

    //         const mid = movies.indexOf(movie);

    //         movies[mid].incart = !movies[mid].incart;

    //         this.setState({
    //             movies:movies
    //         })
    //     }



    // console.log(this.state);
    // const{movies} = this.state;
    // console.log(movies);
    const { movies, addStars, removeStars, handlefav, handleCart } = props;

    return (
        <div className="movie-list">
            {movies.map((movie) => <MovieCard movie={movie}
                addStars={addStars}
                removeStars={removeStars}
                handlefav={handlefav}
                handleCart={handleCart}
                key={movie.id}
            />)}
        </div>
    )
}



export default MovieList;