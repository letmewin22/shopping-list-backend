const List = require('../models/List.model')

class ListController {
  async getItems(req, res) {
    try {
      const list = await List.find({user: req.query.user})
      res.status(200).json(list)
    } catch (e) {
      res.status(500).json({message: 'Ошибка на сервере при запросе'})
    }
  }

  async createItem(req, res) {
    try {
      const list = new List(req.body)
      await list.save()
      res.status(201).json({body: list, message: 'Успешно создано'})
    } catch (e) {
      res.status(500).json({message: 'Ошибка на сервере при запросе'})
    }
  }

  async updateItem(req, res) {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )
      res.status(200).json(updatedList)
    } catch (e) {
      res.status(500).json({message: 'Ошибка на сервере при запросе'})
    }
  }

  async deleteItem(req, res) {
    try {
      const updatedList = await List.findByIdAndRemove(req.params.id)
      res.status(200).json(updatedList)
    } catch (e) {
      res.status(500).json({message: 'Ошибка на сервере при запросе'})
    }
  }
}

module.exports = new ListController()
