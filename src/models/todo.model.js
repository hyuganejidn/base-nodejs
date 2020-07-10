import mongoose from 'mongoose'
const { Schema } = mongoose

const TodoSchema = Schema({
  name: String,
  is_check: Boolean,
})

const TodoModel = mongoose.model('Todos', TodoSchema, 'todos')

export default TodoModel