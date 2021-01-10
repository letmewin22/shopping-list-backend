const {Router} = require('express')
const List = require('../models/List.model')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const list = await List.find()
    res.status(200).json(list)
  } catch (e) {
    res.status(500).json({message: 'Ошибка на сервере при запросе'})
  }
})

router.post('/', async (req, res) => {
  try {
    const list = new List(req.body)
    await list.save()
    res.status(201).json({body: list, message: 'Успешно создано'})
  } catch (e) {
    res.status(500).json({message: 'Ошибка на сервере при запросе'})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updatedList)
  } catch (e) {
    res.status(500).json({message: 'Ошибка на сервере при запросе'})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const updatedList = await List.findByIdAndRemove(req.params.id)
    res.status(200).json(updatedList)
  } catch (e) {
    res.status(500).json({message: 'Ошибка на сервере при запросе'})
  }
})

module.exports = router
