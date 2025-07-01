import { useEffect, useState,useRef, useReducer } from "react";


function blogReducer(state,action){
switch(action.type){
    case 'insert_blog':{
        return[action.blog,...state]
    }
    case 'delete_blog':{
        return state.filter((blog,index) => action.index !== index);
    }
    default:
        return [];
}
}
//Blogging App using Hooks
export default function Blog(){
    
    // const [title,setTitle] = useState('');
    // const [content,setContent] = useState('');
    const [formData,setFormData] = useState({title:"",content:""})
    //const [blogs,setBlogs] = useState([]);
    const inputRef = useRef(null);
    const [blogs,dispatch] = useReducer(blogReducer,[])

   
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
        //using spread operator to add the existing records with a new one 
        //setBlogs([{title:formData.title,content:formData.content},...blogs])
        dispatch({type:"insert_blog",blog:{title:formData.title,content:formData.content}})
        setFormData({title:"",content:""})
        inputRef.current.focus()
        
    }

    useEffect(()=>{
        inputRef.current.focus();
        document.title = "No Blogs!"
    },[])

    useEffect(()=>{
  console.log(blogs);
   if(blogs.length>0){
    if(blogs[0].title){
    document.title = blogs[0].title;
    }else{
        document.title = "No Blogs!"
    }
   }
    },[blogs])

    

    function handleDelete(i){
     //setBlogs(blogs.filter((blogs,index)=>index !== i))
     dispatch({type:"delete_blog",index:i})
    }


    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                value={formData.title}
                                onChange={(e)=>{setFormData({title:e.target.value,content:formData.content})}}
                                ref={inputRef}/>
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                onChange={(e)=>{setFormData({title:formData.title,content:e.target.value})}}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i)=>(
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>

                <div className="blog-btn">
              <button className="remove btn" 
              onClick={(e)=>{handleDelete(i)}}>
                Delete
                </button>
                </div>
                
            </div>
        ))}
        
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
