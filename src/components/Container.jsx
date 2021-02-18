import React, { Component } from "react";
import Header from "./Header";
import MapComponent from "./MapComponent";

class Container extends Component {
  state = {
    inputValue: "",
    responseIP: [],
    apiKey: "",
    isLoading: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { apiKey, inputValue } = this.state;
    this.setState({ isLoading: true });
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${inputValue}&domain=${inputValue}`
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          responseIP: response,
          isLoading: false,
        });
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  render() {
    const { responseIP, isLoading } = this.state;
    return (
      <div>
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          info={this.state.responseIP}
          isLoading={this.state.isLoading}
        />
        {responseIP.length === 0 ||
        responseIP.code === 422 ||
        responseIP.code === 400 ||
        isLoading ? null : (
          <MapComponent info={this.state.responseIP} />
        )}
      </div>
    );
  }
}

export default Container;
