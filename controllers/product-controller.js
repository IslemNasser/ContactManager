const Product = require("../models/product");

const listProducts = (req, res) => {
  Product.find()
    .exec()
    .then((list) => {
      if (list) {
        res.status(200).json(list);
      } else {
        res.status(404).json({ message: "Error" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const createProduct = (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
      });
    
      product.save()
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
};

const getProduct = (req, res) => {
  const id = req.params.idproduct;
  Product.findById(id)
    .exec()
    .then((product) => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Error" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error" });
    });
};

const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.idproduct;
    Product.findById(id)
      .exec()
      .then((product) => {
        if (product) {
          product.name = data.name;
          product.price= data.price;
          product.quantity= data.quantity;
          product.description= data.description;
          product.save();
          return res.status(201).json(product);
        } else {
          return res.status(404).json({
            message: "No product found",
          });
        }
      });
};

const deleteProduct = (req, res) => {
  const id = req.params.idproduct;
  Product.findByIdAndDelete(id)
    .exec()
    .then((product) => {
      if (product) {
        res.status(200).json({ message: "Product deleted successfully" });
      } else {
        res.status(404).json({ message: "No product found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error" });
    });
};


const addProduct = (req, res) => {
  const productBody = req.body;
  console.log(productBody);
  let product = new Product(productBody);
  product.save()
    .then((productSaved) => {
      return res.status(201).json(productSaved);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error" });
    });
};

module.exports = {
  listProducts,
  createProduct,
  getProduct,
  addProduct,
  updateProduct ,
  deleteProduct,
};
