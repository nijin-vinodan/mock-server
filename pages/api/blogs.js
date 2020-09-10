import { cors } from './../../utils/cors';
import { blogs } from './../../data/blogs';

export default async function handler(req, res) {
    await cors(req, res);
    res.status(200).json(blogs)
}
