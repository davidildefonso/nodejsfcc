import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";

export const getAll = (_req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) => {
	console.log('a request to get all the tasks!');
	res.json({ data: 'all tasks!' });
}

export const createOne = (_req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) => {
	console.log('create a  task!');
	res.json({ data: 'task created!'});
}

export const updateOne = (_req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) => {
	console.log('update a task!');
	res.json({ data: 'task updated!'});
}

export const deleteOne = (_req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) => {
	console.log('delete a task!');
	res.json({ data: 'task deleted!'});
}

export const getSingle = (_req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) => {
	console.log('get a single task!');
	res.json({ data: 'a single task!'});
}