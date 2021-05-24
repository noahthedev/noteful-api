const path = require('path')
const express = require('express')
const NotesService = require('./notes-service')

const NotesRouter = express.Router()
const jsonParser = express.json()

const serializeNote = note => ({
  id: note.id,
  title: note.title,
  content: note.content,
  date_created: note.date_created,
  folder_id: note.folder_id
})

notesRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    NotesService.getAllNotes(knexInstance)
      .then(notes => {
        res.json(articles.map(serializeNote))
      })
      .catch(next)
  })