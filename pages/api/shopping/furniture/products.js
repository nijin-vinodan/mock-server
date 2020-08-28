import { couches, chairs, dining } from './../../../../data/furniture';

const data = {
    couches: couches,
    chairs: chairs,
    dining: dining
}

export default function handler(req, res) {
    const {
        category
    } = req.query;

    res.status(200).json(data[category]);
}
