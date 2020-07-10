import TodoService from '../services/todo.service.js'

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoService.getAllTodos()
    res.status(200).json({ todos })
  } catch (error) {
    res.status(400)
  }
}

export { getAllTodos }

