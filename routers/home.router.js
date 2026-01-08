import { Router } from 'express';
import { getGoods } from '../utilities/goods.js';
const router = Router();

router.get('/', (req, res) => {
  const goods = getGoods();
  res.json(goods)
});

export default router;
