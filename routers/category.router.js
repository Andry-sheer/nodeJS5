import { Router } from "express";
import { getGoods } from "../utilities/goods.js";
const router = Router();

router.get("/", async (req, res) => {

  const goods = await getGoods();

  const category = goods.map(item => item.category);

  const sliceTwins = (arr) => {
    return arr.reduce((acc, curr)=> {
      if (!acc.includes(curr)) {
        acc.push(curr)
      }

      return acc;
    }, [])
  }

  res.render("category", {
    items: sliceTwins(category)
  });
})

//! хотів тут зробити як на лекції ви робили, але у таскі не вказано
//! import { resolveCategory } from "../middlewares/index.js";
//! + я переробив той код зі спринту ви казали що краще винести в інший файл

router.get('/:category', async (req, res)=> {
  const goods = await getGoods();
  const category = req.params.category;

  const clearCategory = goods.filter(item => item.category === category);

  if (clearCategory.length === 0) {
    return res.status(404).send('category not found');
  }

    res.render('category_single', {
      category: req.params.category,
      goods: clearCategory
    });
})

export default router;