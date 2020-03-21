var express = require('express');
var router = express.Router()
var sql = require('./sql')

router.get('/user', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getUser(req,res)
})
router.get('/admin', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getAdmin(req,res)
})
router.get('/adminAll', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getAdminAll(req,res)
})
router.get('/products', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getProducts(req,res)
})
router.get('/categories', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getCategories(req,res)
})
router.get('/adminCount', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getAdminCount(req,res)
})
router.get('/categoriesCount', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getCategoriesCount(req,res)
})
router.get('/productsCount', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.getProductsCount(req,res)
})
// 增加

router.post('/addUser', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.addUser(req,res)
})
router.post('/addAdmin', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.addAdmin(req,res)
})
router.post('/addCategories', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.addCategories(req,res)
})
router.post('/addProducts', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.addProducts(req,res)
})
// 修改
router.post('/updataAdmin', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.updataAdmin(req,res)
})
router.post('/updataCategories', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.updataCategories(req,res)
})
router.post('/updataProducts', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.updataProducts(req,res)
})

// 删除
router.post('/deleteAdmin', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.deleteAdmin(req,res)
})
router.post('/deleteCategories', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.deleteCategories(req,res)
})
router.post('/deleteProducts', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*");
    sql.deleteProducts(req,res)
})
module.exports = router