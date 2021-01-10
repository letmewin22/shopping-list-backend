const {Router} = require('express')
const List = require('../models/List.model')
const listController = require('../controllers/list.controller')
const router = Router()

router.get('/', listController.getItems)

router.post('/', listController.createItem)

router.put('/:id', listController.updateItem)

router.delete('/:id', listController.deleteItem)

module.exports = router
