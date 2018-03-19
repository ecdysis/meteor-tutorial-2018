import React, { Component } from 'react';
import Task from './Task.js';

export default class App extends Component {

  getTasks() {
    let tasks = [];
    let id, text;

    for (i=1; i<4; i++) {
      m_id = i;
      m_text = 'This is task ' + i;
      tasks.push({_id : m_id, text: m_text});
    }

    console.log(tasks);
    return tasks;
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
