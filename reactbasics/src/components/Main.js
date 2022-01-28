/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import './Main.css';
// eslint-disable-next-line import/no-duplicates
import { FaPlus } from 'react-icons/fa';
// eslint-disable-next-line import/no-duplicates
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    // eslint-disable-next-line react/no-unused-state
    tarefas: [
      'Estudar',
      'Fazer café',
      'Ler',
    ],
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">

        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((item) => (
            <li key={item}>
              {item}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
