const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct =(req,res,next)=>{
  const prodID = req.params.productID
  Product.findById(prodID,product =>{
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  })
 
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getContact = (req, res, next) => {
  res.render('contact', {
    path: '/contact',
    pageTitle: 'Contact Details'
  });
};

exports.postContact = (req, res, next) => {
  res.redirect('/success') 
 
};
exports.getsuccess = (req, res, next) => {
  res.render('success', {
    pageTitle: 'success',
    path: '/success',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
 
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
