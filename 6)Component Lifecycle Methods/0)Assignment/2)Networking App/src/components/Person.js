import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
 
// Alert when component is about to be removed
  componentWillUnmount() {
    alert(`A person with email ${this.props.person.email} was removed from your network!`);
  }

  render() {
    const { img, email } = this.props.person;
    const {removePerson} = this.props;
    return (
      <div className="person">
        <b onClick={()=>{removePerson(email)}}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }



}

export default Person;
