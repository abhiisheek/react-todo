var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: () => {
    return {
      todos: [
        {
          id: uuid(),
          text: "Walk the dog",
          completed: false
        },
        {
          id: uuid(),
          text: "Clean the yard",
          completed: true
        },
        {
          id: uuid(),
          text: "Play game",
          completed: false
        },
        {
          id: uuid(),
          text: "Watch movie",
          completed: true
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
        }
      ]
    });
  },
  handleSearch: function(showCompleted, searchText) {
    searchText = searchText.toLowerCase();
    this.setState({
      showCompleted,
      searchText
    })
  },
  handleToggle: function(id) {
    var todos = this.state.todos.map((todo) =>{
      if(id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos
    });
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo addNewTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp
