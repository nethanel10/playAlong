import {Router} from 'express'

const router = Router()

router.post('/createRoom', createRoom)

router.post('/createRoomWithStranger', createRoomWithStranger)

router.post('/joinroom', joinroom)

router.post('/sendMessage', sendMessage)

router.post('/changeVideoSettings', changeVideoSettings)

router.get('/:id', getUserDetails)

export default router