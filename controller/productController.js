const db =  require("../models")

//Create MAin Model 
const Product = db.products
const Reveiws = db.reveiws

// MAin Work


// 1, Create Product

const addProduct = async (req , res ) => {
    let info = {
        title : req.body.title,
        price : req.body.price,
        description : req.body.description,
        published : req.body.published ? req.body.published:false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}


// 2. get all product

const getAllProducts = async (req , res) =>{
    let products = await Product.findAll({})
    res.send(products)
}

// 3. get Single product

const getOneProduct = async (req , res) =>{
    let id = req.params.id
    let product = await Product.findOne({where: {id: id}})
    res.send(product)
}


// 4. Update product

const UpdateProduct = async (req , res) =>{
    let id = req.params.id
    let product = await Product.update(req.body,{where: {id: id}})
    res.status(200).send(product)
}

// 5 Delete Product

const deleteProduct = async (req , res) =>{
    let id = req.params.id

    await Product.destroy({where: {id: id}})

    res.status(200).send("Product Has deleted")
}
// 6 Published Product

const publishedProduct = async (req , res) =>{

    const products = await Product.findAll({where: { published : true }})

    res.status(200).send(products)
}


module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    UpdateProduct,
    deleteProduct,
    publishedProduct
}