const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    prods: products,
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
  // console.log(adminData.products);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};
