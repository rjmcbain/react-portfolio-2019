import React, { Component } from "react";

export default class Admin extends Component {
  state = {
    title: "",
    description: "",
    link: ""
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  onSubmit = e => {
    e.preventDefailt();

    const newProject = this.state;

    //// SUBMIT PROJECT ////
    this.props.admin(newProject);

    // Clear State
    this.setState({
      title: "",
      description: "",
      link: ""
    });
  };

  onChange = e => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>Add Project</div>
        <label>Name</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.onChange}
        />
        <label>Link</label>
        <input
          type="text"
          name="link"
          value={this.state.link}
          onChange={this.onChange}
        />
        <input type="submit" value="Add Project" />
      </form>
    );
  }
}
