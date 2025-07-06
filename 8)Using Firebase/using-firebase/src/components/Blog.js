import { useEffect, useReducer, useState } from "react";

import { createBlog,getBlogs,removeBlog } from "../db/dbOps";

function blogReducer(state,action){
switch(action.type){
    case 'insert_blog':{
        return [action.blog,...state]
    }
    case 'fetch_data':{
        return [...action.blogs]
    }
    case 'remove_blog':{
        return state.filter((blog)=>blog.id !== action.index)
    }
    default:
        return [];
}
}



function Blog(){
    const[formData,setForm] = useState({title:"",content:""})
    const[blogs,dispatch]= useReducer(blogReducer,[])
 

    useEffect( ()=>{
      async function fetchData(){
      const data = await getBlogs();
      dispatch({type:'fetch_data',blogs:[...data]})
      console.log();
}
fetchData();
    },[])

    const handleSubmit = async (e)=>{
     e.preventDefault();
     await createBlog({title:formData.title,content:formData.content});
     dispatch({type:'insert_blog',blog:{title:formData.title,content:formData.content}});
     setForm({title:"",content:""})

     console.log(formData);
    }

    function handleDelete(id){
removeBlog(id);
dispatch({type:'remove_blog',index:id})
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
                                onChange={(e)=>{setForm({title:e.target.value,content:formData.content})}}
                                />
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                onChange={(e)=>{setForm({title:formData.title,content:e.target.value})}}/>
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
              onClick={(e)=>{handleDelete(blog.id)}}>
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


export default Blog;