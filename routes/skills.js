import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()
router.get('/new', skillsCtrl.new)

router.post('/', skillsCtrl.create)

export {
  router
}