var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render one todo for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    },
    {
      id: 2,
      text: 'Check all'
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todos.length).toBe(todosComponents.length);
  });
});
