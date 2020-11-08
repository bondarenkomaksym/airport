import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Task from "../../Task";
import CreateTaskInput from "./CreateTaskInput";

import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';


const TasksList = ({ tasks, getTasksList, createTask, deleteTask, updateTask }) => {

  useEffect(() => {
    getTasksList();
  }, []);


  return (
    <main className="todo-list" >
      <CreateTaskInput onCreate={createTask} />
      <ul className="list">
        {tasks.map(task => (
          <Task key={task.id}
            {...task}
            onDelete={deleteTask}
            onChange={updateTask}
          />
        ))}
      </ul>
    </main>
  )
}


TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state)
  }
}

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateTask,
  deleteTask: tasksActions.deleteTask,
  createTask: tasksActions.createTask,
}

export default connect(mapState, mapDispatch)(TasksList);