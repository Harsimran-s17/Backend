const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  }); 
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product=>{
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/procucts'
    })
  } )
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

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];  
      for(product of products){
        const cardProductData = cart.products.find(prod => prod.id === product.id) 
        if(cart.products.find(prod => prod.id === product.id)){
          cartProducts.push({productData: product, qty: cardProductData.qty});
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    })
  })
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId; // (productId is name used in input tag)
  console.log(req.body)
  Product.findById(prodId, (product)=>{
    Cart.addProduct(prodId, product.price)
  });
  res.redirect('/cart');
}

exports.postCartDeleteProduct = (req,res,next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, 19);
    res.redirect('/cart')
  })
}

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
