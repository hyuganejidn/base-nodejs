import express from 'express'
// import { getAllTodos } from '../controllers/todo.controller.js'
const { getAllTodos } = require('../controllers/todo.controller')

const router = express.Router()

router.get("/", function (req, res) {
  return getAllTodos()
})

export default router