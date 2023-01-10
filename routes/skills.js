import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

router.post('/skills', skillsCtrl.create)

router.put('/:id/edit', skillsCtrl.update)

router.delete('/:id', skillsCtrl.delete)

export {
  router
}