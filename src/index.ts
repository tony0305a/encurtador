import { AsyncLocalStorage } from 'async_hooks'
import exp from 'constants'
import express from 'express'
import {Request,Response } from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten',urlController.shorten)
api.get('/:hash',urlController.redirect)




api.listen(3000,()=>{
    console.log('Rodando na porta 3000')
})