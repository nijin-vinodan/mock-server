import { cors } from './../../../../utils/cors';
import { couches, chairs, dining } from './../../../../data/furniture';

const data = {
    couches: couches,
    chairs: chairs,
    dining: dining
}

export default async function handler(req, res) {
    const {
        category
    } = req.query;

    await cors(req, res);
    res.status(200).json(data[category]);
}
