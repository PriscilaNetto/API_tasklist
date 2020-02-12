import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // transforma uma função callback em asycn/ await
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token nâo existe' });
  }

  const [, token] = authHeader.split(' ');
  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

   //  console.log(decoded);
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
