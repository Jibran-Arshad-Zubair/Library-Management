import express  from 'express';
import { login,SignUp } from '../controller/admin.js'

let router = express.Router();

/* GET home page. */
router.post('/login', login);
router.post('/signup', SignUp);  


export default  router;
