// Complete the Form Component and export it
import {name,email} from "./HomePage"

function submitHandler(event){
event.preventdefault();
}

const Form = () => (
  <>
    <div>
      <form onSubmit={submitHandler}>
        {/* Create a h3, 2 inputs and 1 button here */}
      <h3>Login Page</h3>
      <div>
      <input placeholder="Name" value={name} type="text"/>
      </div>
      <div>
      <input placeholder="Email" value={email} type="email"/>
      </div>
      <button>Login</button>
      </form>
    </div>
  </>
);

export default Form;