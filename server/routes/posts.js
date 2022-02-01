import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//http://localhost:3001/posts all work start with posts string
router.get('/', getPosts);
router.post('/', createPost);


export default router;