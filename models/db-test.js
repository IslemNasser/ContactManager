const mongoose = require("mongoose");
const Product = require('./product');
const Customer = require('./customer');
const Order = require('./order');

const dbURI = 'mongodb://localhost/orders';

const connectDb = async () => {
  await mongoose.connect(dbURI, { useNewUrlParser: true });
  console.log("Connected to MongoDB");
};

const closeDb = async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
};

const createProduct = async (product) => {
  try {
    await connectDb();
    console.log('Start saving product');
    await product.save();
    console.log('Product saved');
    await closeDb();
  } catch (error) {
    console.log("Error:", error.message);
  }
};

const createCustomer = async (customer) => {
  try {
    await connectDb();
    console.log('Start saving customer');
    await customer.save();
    console.log('Customer saved');
    await closeDb();
  } catch (error) {
    console.log("Error:", error.message);
  }
};

const createOrder = async (order) => {
  try {
    await connectDb();
    console.log('Start saving order');
    await order.save();
    console.log('Order saved');
    await closeDb();
  } catch (error) {
    console.log("Error:", error.message);
  }
};

// Create instances of Product, Customer, and Order
const display = new Product({
  name: 'Display DELL 19"',
  price: 300,
  quantity: 20,
  description: 'Display HDMI 19 inch'
});

const customer = new Customer({
  name: 'rihab',
  email: 'rihab@example.com',
  
  phone: '123456789'
});

const order = new Order({
  customer: customer._id,
  items: [{
    price: 52,
    quantity: 2,
    product: display._id
  }]
});

// Call the create functions
createProduct(display);
createCustomer(customer);
createOrder(order);
