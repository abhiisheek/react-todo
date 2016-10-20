var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  })

  it('Should call handleAddTodo if valid input is provided', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo addNewTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.newTodo.value = 'Read email';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('Read email');
  });

  it('Should not call handleAddTodo if invalid input is provided', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo addNewTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.newTodo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});
