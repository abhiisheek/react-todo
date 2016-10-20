var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var newTodo = this.refs.newTodo.value;
    if(newTodo && newTodo !== '') {
      this.refs.newTodo.value = '';
      this.props.addNewTodo(newTodo);
    } else {
      this.refs.newTodo.focus();
    }
  },
  render : function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="newTodo" placeholder="What do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
