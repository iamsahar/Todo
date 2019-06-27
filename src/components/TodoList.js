import React, { Component } from "react";
import Todo from './Todo';
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    let { todos } = this.props;

    return (
      <ul>
          {todos.map(todo => <Todo key={todo.id} {...todo} /> )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos : state.todos
  }
}

export default connect(mapStateToProps)(TodoList);
