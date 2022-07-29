import express from 'express';
import { getAll, createOne, updateOne, deleteOne, getSingle } from '../controllers/tasks';

const router = express.Router();

router.route('/').get((_req, res) => {
	getAll(_req, res);
});

router.route('/task/:id').get((_req, res) => {
	getSingle(_req, res);
});

router.route('/task/:id').put((_req, res) => {
	updateOne(_req, res);
});

router.route('/task/:id').delete((_req, res) => {
	deleteOne(_req, res);
});

router.route('/task').post((_req, res) => {
	console.log('ici')
	console.log(_req.body)
	createOne(_req, res);
});

export default router;