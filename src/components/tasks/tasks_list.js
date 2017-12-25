import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTasks  } from '../../actions/tasks';
import axios from 'axios';

const API_URL = `http://localhost:3000/tasks`;
const headers = { 'Content-Type': 'application/json', }

class TasksList extends Component {

  static contextTypes = {
    store: React.PropTypes.object
  };

  componentDidMount () {
    return this.context.store.dispatch(getTasks());
  };

  handleDestroy (id) {
    axios.delete(`${API_URL}/${id}`, { headers: headers })
      .then(res => {
          //console.log("res: " + res.status);
        })
      .catch(e => {
        console.error("error", e);
      })
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        {this.props.tasks.map( (task) => {
          return (
            <div key={task.id}>
            <br />
              <li className="li_height hover1 for_icons">
                <div className="col-md-6" style={{backgroundColor: 'green'}} >{ task.title }</div>
                <div className="col-md-3" style={{backgroundColor: 'yellow'}} >{ task.due_date }</div>
                <div className="col-md-1" style={{backgroundColor: 'grey'}} >{ task.priority }</div>
                <div className="col-md-2 hover2" >
                  <span className="glyphicon glyphicon-align-left" title="Open task">
                    <Link to={`/task/${task.id}`}></Link>
                  </span>
                  <span className="glyphicon glyphicon-check" title="Mark completed"></span>
                  <span onClick={this.handleDestroy.bind(this, task.id)}  className="glyphicon glyphicon-trash" title="Delete"></span>                </div>
              </li>
            </div>
          )
        })}
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks
  }),
  dispatch => ({
    // onAddTrack: (title) => {
    //   const payload = {
    //     id: Date.now().toString(),
    //     title
    //   };
    //   dispatch({ type: 'ADD_TRACK', payload });
    // },
    // onFindTrack: (title) => {
    //   console.log('title', title);
    //   dispatch({ type: 'FIND_TRACK', payload: title});
    // },
    onGetTracks: () => {
      dispatch(getTasks());
    }
  })
)(TasksList);