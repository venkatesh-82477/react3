import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.displayData = [];

    this.state = {
        name: "",
        department: "",
        rating: "",
        displayForm: false,
        showData: this.displayData
    };

    this.description = this.description.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  description() {
    this.displayData.push(
      <div className="data">
        Name: {this.state.name} | Department: {this.state.department} | Rating: {this.state.rating}
      </div>
    );

    this.setState({
        name: "",
        department: "",
        rating: "",
        showData: this.displayData
    });
  }

  setName(e) {
    let val = e.target.value;
    this.setState({
      name: val
    });
  }

  setDepartment(e) {
    let val = e.target.value;
    this.setState({
      department: val
    });
  }

  setRating(e) {
    let val = e.target.value;
    this.setState({
      rating: val
    });
  }

  hideForm() {
    this.description();
    this.setState({
      displayForm: true
    });
  }

  showForm() {
    this.setState({
      displayForm: false
    });
  }
    render() {
        return (
          <div className="container">
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            {this.state.displayForm ? (
              <>
                <div id="Data">{this.displayData}</div>
                <button onClick={this.showForm}>Go Back</button>
              </>
            ) : null}
            {!this.state.displayForm ? (
              <form className="form" >
                <label>
                  Name:
                  <input type="text" value={this.state.name} onChange={this.setName} />
                </label><br></br>
                <label>
                  Department:
                  <input type="text" value={this.state.department} onChange={this.setDepartment} />
                </label><br></br>
                <label>
                  Rating:
                  <input type="number" value={this.state.rating} onChange={this.setRating} />
                </label><br></br>
                <button onClick={this.hideForm}>Submit</button>
              </form>
            ) : null}
          </div>
        );
      }
  }

  export default Form;
