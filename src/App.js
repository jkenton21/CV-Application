// App.js

import React, { Component } from "react";
import applicant from "./Components/applicant";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { 
        text: '',
        id: uniqid()
      },
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
       },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="nameInput">Full Name</label>
          <input 
            onChange={this.handleChange} 
            value={task.text}
            type="text" 
            id="nameInput"
          />
          <label htmlFor="emailInput">Email</label>
          <input 
            onChange={this.handleChange} 
            value={task.text}
            type="email" 
            id="emailInput"
          />
          <label htmlFor="phoneInput">Phone Number</label>
          <input 
            onChange={this.handleChange} 
            value={task.text}
            type="number" 
            id="phoneInput"
          />
          <button type="submit">
            Submit
          </button>
        </form>
        <applicant tasks={tasks} />
      </div>
    );
  }
}

export default App;