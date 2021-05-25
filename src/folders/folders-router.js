const path = require('path')
const express = require('express')
const FoldersService = require('./folders-service')

const foldersRouter = express.Router()
const jsonParser = express.json()

const serializeFolder = folder => ({
  id: folder.id,
  title: folder.title
})

foldersRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    FoldersService.getAllFolders
    (knexInstance)
      .then(folders => {
        res.json(folders.map(serializeFolder))
      })
      .catch(next)
  })

module.exports = foldersRouter  

