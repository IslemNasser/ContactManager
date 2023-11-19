const Order = require("../models/order");

const listOrders = (req, res) => {
  Order.find()
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

const createOrder = (req, res) => {
  const order = new Order({
    customer: req.body.customer,
    Items: req.body.Items,
  });

  order.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const getOrder = (req, res) => {
  const id = req.params.idorder;
  Order.findById(id)
    .exec()
    .then((order) => {
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: "Error" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error" });
    });
};

const updateOrder = (req, res) => {
  const data = req.body;
  const id = req.params.idorder;
  Order.findById(id)
    .exec()
    .then((order) => {
      if (order) {
        order.customer = data.customer;
        order.Items = data.Items;
        order.save();
        return res.status(201).json(order);
      } else {
        return res.status(404).json({
          message: "No order found",
        });
      }
    });
};

const deleteOrder = (req, res) => {
  const id = req.params.idorder;
  Order.findByIdAndDelete(id)
    .exec()
    .then((order) => {
      if (order) {
        res.status(200).json({ message: "Order deleted successfully" });
      } else {
        res.status(404).json({ message: "No order found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error" });
    });
};

module.exports = {
  listOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
};
hgtytg
gtyfa-pull-rightnnfyyr
vvbfyrfa-inverse
bvgtytkfut DOMMatrixReadOnly,

