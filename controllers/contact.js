const path =require('path')
const rootDir = require('../helper/path')

exports.getContactController = (req,res,next)=>{
    res.render('/shop/contact', {
        pageTitle: 'contact',
        path: '/contact',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
}

exports.postContactController =(req,res)=>{
    res.redirect('/success') 
}

