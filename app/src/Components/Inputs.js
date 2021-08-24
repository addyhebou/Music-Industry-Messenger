import React, { Component } from 'react';
import Message from './Message';

export default class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      compliment: '',
      company: '',
      producer: '',
      loaded: false,
      comparison: '',
      song: '',
    };

    this.publish = this.publish.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeProducer = this.handleChangeProducer.bind(this);
    this.handleChangeComparison = this.handleChangeComparison.bind(this);
    this.handleChangeSong = this.handleChangeSong.bind(this);
  }

  handleChangeName({ target }) {
    this.setState({
      name: target.value,
    });
  }
  handleChangeComparison({ target }) {
    this.setState({
      comparison: target.value,
    });
  }
  handleChangeSong({ target }) {
    this.setState({
      song: target.value,
    });
  }

  handleChangeCompany({ target }) {
    console.log('Company Name Modified');
    this.setState({
      company: target.value,
    });
  }

  handleChangeProducer({ target }) {
    console.log('Producer Name Modified');
    this.setState({
      producer: target.value,
    });
  }

  publish() {
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div className='Box'>
        <h1>Writer Outreach</h1>
        <div className='inputBox'>
          <input
            type='text'
            name='name'
            placeholder="Figure's name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            type='text'
            name='comparison'
            placeholder='Song comparison'
            value={this.state.comparison}
            onChange={this.handleChangeComparison}
          />
          <input
            type='text'
            name='song'
            placeholder='Song title'
            value={this.state.song}
            onChange={this.handleChangeSong}
          />
          <input
            type='text'
            company='company'
            placeholder='Company name'
            value={this.state.company}
            onChange={this.handleChangeCompany}
          />
          <input
            type='text'
            producer='producr'
            placeholder='Mark if Producer'
            value={this.state.producer}
            onChange={this.handleChangeProducer}
          />
        </div>
        <button value='Send' onClick={this.publish}>
          GET MESSAGE
        </button>
        {this.state.loaded && (
          <Message
            name={this.state.name}
            company={this.state.company}
            comparison={this.state.comparison}
            producer={this.state.producer}
            song={this.state.song}
          />
        )}
      </div>
    );
  }
}
