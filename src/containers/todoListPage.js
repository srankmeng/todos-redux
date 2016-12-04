import React, {Component} from 'react';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Filter from '../components/filter';
import * as todoAction from '../actions/todoListAction';

class TodoList extends Component {

  toggleCheck(i){
    this.props.actions.toggleStatus(i);
  }

  deleteItem(i){
    this.props.actions.deleteTodo(i);
  }

  changeFilter(e){
    this.props.actions.filterTodo(e.target.value);
  }

  isShow(isComplete){
    const {todoList} = this.props;
    if (todoList.filter === 'complete' && isComplete) {
      return 'table-row';
    } else if(todoList.filter === 'inComplete' && !isComplete){
      return 'table-row';
    } else if(todoList.filter === 'all'){
      return 'table-row';
    } else {
      return 'none';
    }
  }

  render() {
    const {todoList} = this.props;
    return (
      <div className="container">
        <h5>Reminders <Link to={`/detail`} className="pull-right btn">+</Link></h5>
        <Filter changeFilter={(e) => this.changeFilter(e)} value={todoList.filter} />
        <table>
          <tbody>
            {
              todoList.list.map((item, i) => {
                return (
                  <tr key={i} style={{display: this.isShow(item.isComplete)}}>
                    <td width="20"><input type="checkbox" checked={item.isComplete} onChange={() => this.toggleCheck(i)} /></td>
                    <td>
                      <span>{item.title}</span>
                      <span className="date">{moment(item.date).format('DD/MM/YYYY')}</span>
                    </td>
                    <td width="50">
                      <Link to={`/detail/${item.id}`} className="pull-right btn">view</Link>
                    </td>
                    <td width="50">
                      <a href="#" onClick={() => this.deleteItem(i)} className="pull-right btn">delete</a>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
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

const TodoListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListPage
