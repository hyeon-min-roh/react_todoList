import React, { Component } from 'react';
import TodoListTemplate from './component/TodoListTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';


class App extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false},
      { id: 1, text: '리액트 소개', checked: true},
      { id: 2, text: '리액트 소개', checked: false},
    ],
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = (e) => {
    const {input, todos} = this.state;

    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      }),
    });
  };

  handleKeyPress = (e) => {
    // press enter
    if( e.key == 'Enter'){
      this.handleCreate();
    }
  };


  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id  === id);
    const selected = todos[index];

    const nextTodos = [...todos]; // todos clone
    
    // copy todos
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    
    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = (id) => {
    const {todos} = this.state;

    this.setState({
      todos: todos.filter(todo => todo.id != id)
      // filter: 특정 조건에 부합되는 원소들만 뽑아내서 새 배열 생성
    });
  };

  render() {
    const {input, todos} = this.state;

    return (
      <TodoListTemplate 
        form = {(<Form
          value = {input}          
          onChange = {this.handleChange}
          onCreat = {this.handleCreate}
          onKeyPress = {this.handleKeyPress}
        />)}
      >
        <TodoItemList
          todos = {todos}
          onToggle = {this.handleToggle}
          onRemove = {this.handleRemove}
        />        
      </TodoListTemplate>
    );
  }
}

export default App;