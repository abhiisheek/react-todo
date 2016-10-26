var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should exist", ()=> {
    expect(TodoAPI).toExist();
  });

  describe("setTodos", () => {
    it("Should set valid todos array", () => {
      var todos = [{
        id: 21,
        text: "Test all files",
        completed: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem("todos"));
      expect(actualTodos).toEqual(todos);
    });

    it("Should not set invalid todos array", () => {
      var badTodos = {
        id: 21,
        text: "Test all files",
        completed: false
      };

      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem("todos")).toBe(null);
    });
  });

  describe("getTodos", () => {
    it("Should return empty array for bad localStorage data", () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it("Should return valid todos array", () => {
      var todos = [{
        id: 21,
        text: "Test all files",
        completed: false
      }];

      localStorage.setItem("todos", JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe("filterTodos", () => {
    var todos = [{
      id: 1,
      text: "Test all files",
      completed: false
    },
    {
      id: 2,
      text: "All files",
      completed: true
    },
    {
      id: 3,
      text: "Test all files",
      completed: true
    }];

    it("Should return all todos if showCompleted is true", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it("Should return only uncompleted todos if showCompleted is false", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it("Should sort by completed status", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it("Should filter todos by searchText", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'test');
      expect(filteredTodos.length).toBe(2);
    });

    it("Should return all todos if searchText is empty", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
