import { Router } from "express";
import { getGoods } from "../utilities/goods.js";
const router = Router();

router.get("/", async (req, res) => {
  const goods = await getGoods();
  const category = goods.map((item) => item.category);
  
  res.render("category", {
    items: [...new Set(category)],
  });
});


router.get("/:category", async (req, res) => {
  const goods = await getGoods();
  const category = req.params.category;
  const clearCategory = goods.filter((item) => item.category === category);

  if (clearCategory.length === 0) {
    return res.status(404).send("category not found");
  }

  res.render("category_single", {
    category: req.params.category,
    goods: clearCategory,
  });
});

export default router;
