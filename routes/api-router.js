var express = require('express');
var router = express.Router();
const pc = require('../controllers/product-controller');
const cc = require('../controllers/customer-controller');
const oc = require('../controllers/orders-controller');

router.route('/customers')
  .get(cc.listclient)
  .post(cc.createclient);

router.route('/products')
  .get(pc.listProducts)
  .post(pc.createProduct);

router.route('/orders')
  .get(oc.listOrders)
  .post(oc.createOrder);

router.route('/customers/:idcustomer')
  .get(cc.getClient)
  .put(cc.updatecustomer)
  .delete(cc.deleteclient);

router.route('/products/:idproduct')
  .get(pc.getProduct)
  .put(pc.updateProduct)
  .delete(pc.deleteProduct);

router.route('/orders/:idorder')
  .get(oc.getOrder)
  .put(oc.updateOrder)
  .delete(oc.deleteOrder);

module.exports = router;
hgtyt
<i class="fa fa-flagfhr" aria-hidden="true"></i>
dhfgry
djrfa-flip-horizontaldhfhhrfhfa-flip-horizontal
ffhrgtfa-rotate-180dhrebdhe 
hruedod,nchf 

ffhryrg <i class="fas fa-hand-point-right    "></i>