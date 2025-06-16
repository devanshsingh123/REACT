/** setState Details dive
 * 1)It is asynchronous in Nature
 * 2)Batching in setState.
 * 
 * 
 * In React, multiple setState calls are batched into a single 
 * re-render for efficiency. When setState uses the current state (this.state.count + 1),
 *  React may not immediately reflect changes. However, 
 * using a callback with prevState ensures correct state updates.
 * 
 * 
 * In React, the setState method schedules an update to the component's state object.
 *  React does not update the state immediately after the setState call; 
 * instead, it waits until the current function (like an event handler) completes and 
 * then performs the state update in a batch. This helps React optimize performance 
 * by minimizing the number of re-renders, ensuring the Ul is updated efficiently. 
 * Since the state update is batched, any code that runs immediately after setState 
 * will not see the updated state right away.
 * 
 * 
 */




function MovieCard (props){

    // addStars = (movie) => {
    //     //form 1

    //     // this.setState({
    //     //     stars:this.state.stars+0.5
    //     // },()=>{console.log(this.state.stars)})

    //     //  this.setState({
    //     //     stars:this.state.stars+1
    //     // },()=>{console.log(this.state.stars)})

    //     //  this.setState({
    //     //     stars:this.state.stars+2
    //     // },()=>{console.log(this.state.stars)})

    //     //  this.setState({
    //     //     stars:this.state.stars+3
    //     // },()=>{console.log(this.state.stars)})

    //     //form 2
    //     if (this.state.stars >= 5) {
    //         return
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars + 0.5

    //         }
    //     })
    //     // },()=>{console.log("Checking value of stars  from callback function of setState: ",this.state.stars)})
    //     // console.log("just after setting stars: ",this.state.stars); //becuase the setState is asynchronous , it will show not updated value

    //     // this.setState((prevState)=>{
    //     //     return{
    //     //     stars:prevState.stars+0.5
    //     //     }
    //     // })

    //     // this.setState((prevState)=>{
    //     //     return{
    //     //     stars:prevState.stars+1
    //     //     }
    //     // })

    //     // this.setState((prevState)=>{
    //     //     return{
    //     //     stars:prevState.stars+2
    //     //     }
    //     // })
    //     //this.state.stars+=0.5;
    //     //console.log(this.state.stars);

    // }

    // removeStars = () => {
    //     if (this.state.stars <= 0) {
    //         return
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars - 0.5
    //         }
    //     })
    // }

    // handleFav = () => {
    //     //console.log("hanldeFav: ",this)
    //     this.setState({
    //         fav: !this.state.fav
    //     })

    // }

    // handleCart = () => {

    //     this.setState({
    //         incart: !this.state.incart
    //     })

    // }

        
        const {id,title,poster,plot,price,rating,stars,fav,incart} = props.movie;
        const{movie,addStars,removeStars,handleCart,handlefav} = props
        return (
            <div className="main" key={id}>
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">
                            {title}
                        </div>
                        <div className="plot">
                           {plot}
                        </div>
                        <div className="price">{price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" 
                                alt="decrese"
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                onClick={()=>{removeStars(movie)}}/>

                                    <img alt="star" className="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />

                                    <img className="str-btn" 
                                    alt="increase"
                                src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
                                onClick={()=>{addStars(movie)}}/>
                                <span className="starCount">{stars}</span>
                            </div>
                            {/**fav?<button className="unfavourite-btn" onClick={this.handleFav}>UnFavourite</button>:<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>*/}
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handlefav(movie)}}>{fav?"Un-Favourite":"Favourite"}</button>
                            <button className={incart?"unfavourite-btn":"cart-btn"} onClick={()=>{handleCart(movie)}}>{incart?"Remove":"Add To Cart"}</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    
}

export default MovieCard;