var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  renderTodos : function(todos) {
    if(todos.length === 0) {
      return (
        <p className="container__message">Nothing To Do</p>
      );
    }
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
      );
    });
  },
  render: function() {
    var {todos} = this.props;

    return (
      <div>
        {this.renderTodos(todos)}
      </div>
    );
  }
});

module.exports = TodoList;
