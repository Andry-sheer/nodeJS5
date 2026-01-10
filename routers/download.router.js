import { Router } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/:fileName", async (req, res) => {
  try {
    const { fileName } = req.params
    const filePath = join(__dirname, "..", "data", fileName);
    res.download(filePath, "catalog.json");
  } catch (error) {
    console.log(error);
    res.status(404).send("file not found!");
  }
});

export default router;
