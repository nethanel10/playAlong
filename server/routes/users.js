import {Router} from 'express'
import {signup, signin, getUserDetails, verificate} from '../controllers/usersController.js'

const router = Router()

router.post('/signup', signup)

router.post('/signin', signin)

router.post('/verificate/:id', verificate)

router.get('/:id', getUserDetails)

export default router