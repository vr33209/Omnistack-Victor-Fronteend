import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api'

import logo from '../../assets/logo.svg'

export default class Main extends Component {

  state = {
    newBox: '',
  };

  handleSubmit = async event => {
    event.preventDefault();

    const response = await api.post('boxes', {
      title: this.state.newBox,
    })

    this.props.history.push(`/box/${response.data._id}`)
  }

  handleInputChange = (event) => {
    this.setState({ newBox: event.target.value })
  }
  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            placeholder="Criar um Box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    )
  }
}
