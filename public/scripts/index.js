import * as A from './actions.js'

const cacheRefresh = ['add_todo', 'update_todo', 'remove_todo']

container.addEventListener('click', async ({ target }) => {
  if (!target.classList.contains('btn')) return

  result.innerHTML = ''

  switch (target.dataset.for) {
    case 'get_cached_todos':
      return A.getCachedTodos()
    case 'get_todos_from_server':
      return A.getTodosFromServer()
    case 'get_todo_by_id':
      return A.getTodoById(idInput.value)
    case 'get_first_two_todos':
      return A.getFirstTwoTodosDesc()
    case 'add_todo':
      await A.addTodo(textInput.value)
      break
    case 'update_todo': {
      const { id } = target.closest('.todo_item').dataset
      await A.updateTodo(id)
      break
    }
    case 'remove_todo': {
      const { id } = target.closest('.todo_item').dataset
      await A.removeTodo(id)
      break
    }
    case 'set_auth_token':
      return A.setAuthToken()
    case 'send_private_request':
      return A.sendPrivateRequest()
    case 'send_long_request':
      return A.sendTooLongRequest()
    case 'get_custom_error':
      return A.getCustomError()
    case 'throw_exception':
      return A.throwException()
  }

  if (cacheRefresh.includes(target.dataset.for)) {
    A.getTodosFromServer()
  }
})
