var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  renderTodos : function(todos) {
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
