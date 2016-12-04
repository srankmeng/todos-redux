import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import * as todoAction from '../actions/todoListAction';
import 'react-datepicker/dist/react-datepicker.css';

class TodoDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.params.itemId || 0,
      title: '',
      description: '',
      date: moment(),
      isComplete: false,
    };
  }

  componentDidMount(){
    this.props.todoList.list.forEach((item) => {
      if (item.id.toString() === this.state.id) {
        this.setState({
          title: item.title,
          description: item.description,
          date: moment(item.date),
          isComplete: item.isComplete,
        });
      }
    });
  }

  handleChange(input,name){
    let val = name === 'date' ? input : input.target.value;
    this.setState({
      [name] : val
    });
  }

  submitForm(e){
    e.preventDefault()
    if (this.state.id) {// edit
      this.props.actions.editTodoList(this.state);
    } else{ // add
      this.props.actions.addTodoList(this.state);   
    }
    
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="form-control">
            <label>Title</label>
            <input type="text" onChange={(e) => this.handleChange(e,'title')} value={this.state.title} />
          </div>
          <div className="form-control">
            <label>Description</label>
            <input type="text" onChange={(e) => this.handleChange(e,'description')} value={this.state.description} />
          </div>
          <div className="form-control">
            <label>Date</label>
            <DatePicker selected={this.state.date} onChange={(e) => this.handleChange(e,'date')} dateFormat="DD/MM/YYYY"/>
          </div>
          <button type="submit">{this.state.id ? 'edit' : 'add'}</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoListReducer,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoAction, dispatch)
})

const TodoDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail)

export default TodoDetailPage
