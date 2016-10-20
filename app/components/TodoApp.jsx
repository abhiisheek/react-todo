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
          text: "Walk the dog"
        },
        {
          id: uuid(),
          text: "Clean the yard"
        },
        {
          id: uuid(),
          text: "Play game"
        },
        {
          id: uuid(),
          text: "Watch movie"
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
          text
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
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo addNewTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp
