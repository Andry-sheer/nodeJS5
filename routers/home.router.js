import { Router } from "express";
import { getGoods } from "../utilities/goods.js";
import { getRandom } from "../utilities/get_random.js";
import path from "path";
import fs from 'fs/promises';
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

router.get('/download-file/:filename', (req, res)=> {
  const filename = req.params.filename;
  const filePath = path.join(process.cwd(), 'data', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('File not found');
    }

    res.download(filePath, (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading file');
      }
    });
  });
})

export default router;
