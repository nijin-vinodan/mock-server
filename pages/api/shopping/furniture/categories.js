import { categories } from './../../../../data/furniture/categories';

export default function handler(req, res) {
    res.status(200).json(categories)
}
