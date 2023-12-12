import express from 'express';
const router = express.Router();
import studentcontroller from '../controllers/studentcontroller.js'

router.get('/',studentcontroller.getAllDoc)
router.post('/',studentcontroller.createDoc)
router.get('/edit/:id',studentcontroller.editDoc)
router.post('/update/:id', studentcontroller.updateDocById)
router.post('/delete/:id',studentcontroller.deleteDocById)
export default router