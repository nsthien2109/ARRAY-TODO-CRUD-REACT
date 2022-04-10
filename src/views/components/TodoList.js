import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoList extends Component {

    state = {
        editTodo : {},
        id : '',
        name : '',
        point : '',
        studentClass : ''
    }

    onChangeClicked = (todo) =>{
        this.setState({
            editTodo  : todo,
            id : todo.id,
            name : todo.name,
            point : todo.point,
            studentClass : todo.studentClass
        })
    }

    onClickCancel = () => {
        this.setState({
            editTodo : {}
        })
    }

    handleChangeName = (event) =>{
        this.setState({
         name : event.target.value
        })
      }
    
      handleChangeClass = (event) =>{
       this.setState({
        studentClass : event.target.value
       })
     }
    
     handleChangePoint = (event) =>{
       this.setState({
        point : event.target.value
       })
     }

    onClickSave = () => {

    }

    SuccessNotify = () => toast.success("Đã xóa thành công");


    removeStudent = (index) => {
        this.SuccessNotify();
        this.props.arrayDelete(index);
    }

    EditTodo = () =>{
       var term = this.state.editTodo
       term.id = this.state.id
       term.name = this.state.name
       term.point = this.state.point
       term.studentClass = this.state.studentClass

       this.setState({
           editTodo : term
       })
       this.props.arrayEdit(this.state.editTodo)
       this.onClickCancel();
    }

  render() {
    return (
      <>
        <ul className="todos-list">
            { this.props.arrayStudent.length >= 1 &&
                this.props.arrayStudent.map((item,index)=>
                    <li key={index} className="item-todo">
                        <div className="item-container">
                            { this.state.editTodo !== item ?
                                <>
                                    <h5>Name :  {item.name}</h5>                            
                                    <div className="item-content">
                                        <p>Class : {item.studentClass}</p>
                                        <p>Point :  {item.point}</p>
                                    </div>
                                </>
                                : 
                                <>
                                    <input type="text" value={this.state.name} onChange={(event) => this.handleChangeName(event)}/>
                                    <div className="item-content">
                                        <input type="text" value={this.state.studentClass} onChange={(event)=> this.handleChangeClass(event)}/>
                                        <input type="text" value={this.state.point} onChange = {(event) => this.handleChangePoint(event)}/>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="item-delete">
                            <span onClick={()=> this.removeStudent(item.id)}>Xóa</span>
                            {this.state.editTodo !== item ?  
                                <span onClick={()=> this.onChangeClicked(item)}>Sửa</span> 
                                : <> <span onClick={()=> this.EditTodo()}>Lưu</span> <span onClick={()=> this.onClickCancel()}>Hủy</span> </>
                            }
                        </div>
                    </li>
                )
            }
        </ul>
      </>
    )
  }
}

export default TodoList;
