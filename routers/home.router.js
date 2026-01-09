import { Router } from "express";
import { getGoods } from "../utilities/goods.js";
import { getRandom } from "../utilities/get_random.js";
const router = Router();

router.get("/", async (req, res) => {
  const goods = await getGoods();

  const filteredPhones = goods.filter((item) => item.category === "phones");
  const filteredLaptops = goods.filter((item) => item.category === "laptops");

  const tabs = [
    {
      category: "phones",
      items: getRandom(filteredPhones, 4)
    },

    {
      category: "laptops",
      items: getRandom(filteredLaptops, 4)
    }
  ];

  res.render("main", { tabs });
});

export default router;
