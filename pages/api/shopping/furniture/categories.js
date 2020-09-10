import { cors } from './../../../../utils/cors';
import { categories } from './../../../../data/furniture/categories';

export default async function handler(req, res) {
    await cors(req, res);
    res.status(200).json(categories)
}
