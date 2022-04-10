import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class TodoApp extends React.Component {
  state = {
    arrayStudent : [
        // {
        //   name : "",
        //   studentClass : "", 
        //   point : ""
        // }
    ]
}

arrayRefresh = (student) => {
  var array = this.state.arrayStudent;
  this.setState({
    arrayStudent : [...array,student]
  })
}

arrayDelete = (studentID) => {
  var array = [...this.state.arrayStudent];
  const newArray = array.filter((item) => item.id !== studentID);
  this.setState({
    arrayStudent : [...newArray]
  })
  console.log(studentID)
}

arrayEdit = (student) => {
  let students = [...this.state.arrayStudent];
  for (let index = 0; index < this.state.arrayStudent.length; index++) {
    if (student.id == this.state.arrayStudent.id){
      students[index] = student;
      this.setState({
        arrayStudent : students
      })
    }  
  }
}





  render() {
    console.log(React.version)
    return (
        <div className="App row">
        <div className="todo-container col-6">
          <TodoForm arrayStudent={this.state.arrayStudent} arrayRefresh= {this.arrayRefresh}/>
        </div>
        <div className="todos-list-container col-6">
          <TodoList arrayStudent={this.state.arrayStudent} arrayDelete={this.arrayDelete} arrayEdit={this.arrayEdit} />
        </div>
      </div>
    )
  }
}

export default TodoApp
