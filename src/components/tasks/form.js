import React  from 'react';
// import axios from 'axios';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: {
        title: '',
        description: '',
        priority: '',
        due_date: '',
        user_id: ''
      }
    };
  }

  handleChange(field, element) {
    this.state.task[field] = element.target.value
  }

  handleSubmit(element) {
    element.preventDefault();
    //console.log(this.state.task);
  }

  render() {
    return(
      <form className='form-group' onSubmit={ this.handleSubmit.bind(this) } >

        <label>Title:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'title') } type="text" placeholder='Enter a title' />

        <label>Description:</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'description') } type="text" placeholder='Enter a description' />

        <label>Priority</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'priority') } type="number" placeholder='Enter a priority' />

        <label>Date</label>
        <input className='form-control' onChange={ this.handleChange.bind( this, 'date') } type="date" placeholder='Enter a date' /><br/>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }

}

export default Form;

// const TaskNew = () => {

//   let state = {
//     task: {
//       title: '',
//       description: '',
//       priority: '',
//       due_date: '',
//       user_id: ''
//     }
//   };

//   const onChange = field => e => {
//     state.task[field] = e.target.value
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(state.task);

//     let API_URL = `http://localhost:8000/tasks`;
//     let body = JSON.stringify({task: state.task});
//     let headers = { 'Content-Type': 'application/json', }

//     axios.post(API_URL, body, { headers: headers })
//       .then(res => {
//         console.log(res);
//       })
//       .catch(e => {
//         console.error(e);
//       })
//   }

//   return(
//     <div>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label className="control-label">title</label>
//           <input
//             value={state.title}
//             onChange={onChange('title')}
//             className="form-control"
//             type="text"
//             name="title"
//             placeholder="title"
//            />
//         </div>

//         <div className="form-group">
//           <label className="control-label">description</label>
//           <textarea
//             value={state.description}
//             onChange={onChange('description')}
//             className="form-control"
//             type="text"
//             name="description"
//             placeholder="description"
//            />
//         </div>

//         <div className="form-group">
//           <label className="control-label">priority</label>
//           <input
//             value={state.priority}
//             onChange={onChange('priority')}
//             className="form-control"
//             type="number"
//             name="priority"
//             placeholder="priority"
//            />
//         </div>

//         <div className="form-group">
//           <label className="control-label">due_date</label>
//           <input
//             value={state.due_date}
//             onChange={onChange('due_date')}
//             className="form-control"
//             type="date"
//             name="due_date"
//             placeholder="due_date"
//           />
//         </div>

//         <button type="submit" className="btn btn-success">
//           Add task
//         </button>
//       </form>
//     </div>
//   );
// }

// export default  TaskNew;