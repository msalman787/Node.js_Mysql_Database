const productController = require("../controller/productController")

const router = require('express').Router()


router.post("/addProduct",productController.addProduct) 

router.get("/allProduct",productController.getAllProducts)

router.get("/published",productController.publishedProduct)

router.get("/:id",productController.getOneProduct)

router.put("/:id",productController.UpdateProduct)

router.delete("/:id",productController.deleteProduct)


module.exports = router;