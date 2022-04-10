import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoForm extends React.Component {
  state = {
    id : 'Z',
    name : '',
    point : '',
    studentClass : ''
  }

  SuccessNotify = () => toast("Đã thêm thành công!");
  ErrorNotify = () => toast.error("Vui lòng điền đầy đủ thông tin");


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

 onClickSubmit = (event) =>{
  event.preventDefault();
   if(!this.state.name || !this.state.point || !this.state.studentClass){
     this.ErrorNotify();
     return;
   }
   var random = Math.floor(Math.random() * 1000);
   this.setState({
     id : random
    })
   this.props.arrayRefresh(this.state);
   this.setState({
     id : '',
     name : '',
     point  :'',
     studentClass : ''
   })
   this.SuccessNotify();
 }


  render() {
    return (
        <>
            <form className="todo-form">
                <label forhtml="">Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={(event)=> this.handleChangeName(event)} placeholder="Name" />
                <label forhtml="">Class</label>
                <input type="text" className="form-control" value={this.state.studentClass} onChange={(event)=> this.handleChangeClass(event)} placeholder="Class" />
                <label forhtml="">Point</label>
                <input type="text" className="form-control" value={this.state.point} onChange={(event)=> this.handleChangePoint(event)} placeholder="Point" />
                <input type="submit" className="btn-submit form-control" value="Submit" onClick={(event)=> this.onClickSubmit(event)} />
            </form>
            <ToastContainer />
        </>
      )
  }
}

export default TodoForm