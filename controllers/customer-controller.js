const Customer = require("../models/customer");

const listclient = (req, res) => {
  Customer.find()
    .exec()
    .then((list) => {
      if (list.length > 0) {
        res.status(200).json(list);
      } else {
        res.status(404).json({ message: "No customers found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const createclient = (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  customer.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

const deleteclient = (req, res) => {
  const id = req.params.idcustomer;
  Customer.findByIdAndDelete(id)
    .exec()
    .then((customer) => {
      if (customer) {
        res.status(200).json({ message: "Customer deleted successfully" });
      } else {
        res.status(404).json({ message: "No customer found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error" });
    });
};

const updatecustomer = 
  (req,res)=>{
    const data =req.body;
    const id=req.params.idcustomer;
Customer
.findById(id)
.exec()
.then (customer=>{
    if(customer){
        customer.name=data.name;
        customer.email=data.email;
        customer.adress=data.adress;
        customer.phone=data.phone;

        customer.save();
        return res.status (201).json(customer)
    }else{
        return res.status(404).json({message:'No customer found'})
    }
})
.catch(error=> {
    console.log(error);
     // Handle the error that occurred during the database query
    // E.g., return an appropriate error response
    return res.status(500).json({ message: 'Error retrieving customer' })
})
};

const getClient = (req, res) => {
  const id = req.params.idcustomer;
  Customer.findById(id)
    .exec()
    .then((client) => {
      if (client) {
        res.status(200).json(client);
      } else {
        res.status(404).json({ message: "No customer found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Error" });
    });
};

module.exports = {
  listclient,
  createclient,
  deleteclient,
  updatecustomer,
  getClient,
};
