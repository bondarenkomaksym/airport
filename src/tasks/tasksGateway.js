const baseUrl = "https://5f903ab5e0559c0016ad64ac.mockapi.io/tasks";


export const createTask = taskData => {
  //параметры передачи на сервер и в then проверяем статус
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("fail to create task");
    }
  })
}

export const fetchTasksList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  })
    .then(tasksList =>
      tasksList.map(({ id, ...task }) => ({
        id: id,
        ...task,
      }))
    )
}


export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("fail to create task");
    }
  })
}

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error("fail to delete task");
    }
  })
};