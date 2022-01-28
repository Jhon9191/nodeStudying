/* eslint-disable class-methods-use-this */
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
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    // eslint-disable-next-line no-useless-return
    if (tarefas.indexOf(novaTarefa) !== -1) return;
    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
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
        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((item) => (
            <li key={item}>
              {item}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
