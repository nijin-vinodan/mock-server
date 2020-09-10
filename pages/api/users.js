import { cors } from './../../utils/cors';
import { users } from './../../data/users';


export default async function handler(req, res) {
  await cors(req, res);
  res.status(200).json(users)
}
