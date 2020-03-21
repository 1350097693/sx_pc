var connection = require('./mysql');

    // 查询
    function getUser (req,res) {
        var sql = 'SELECT * FROM user  ';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            res.send(result);
        });
    }
    function getAdmin (req,res) {
        var sql = 'SELECT * FROM admin limit ?,6';
        connection.query(sql,[req.query.currntPage*6], function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function getAdminAll (req,res) {
        var sql = 'SELECT * FROM admin';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function getAdminCount (req,res) {
        var sql = 'select count(*) from admin';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function getProducts (req,res) {
        var sql = 'SELECT * FROM products limit ?,6';
        connection.query(sql,[req.query.currntPage*6], function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function getProductsCount (req,res) {
        var sql = 'select count(*) from products';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function getCategories (req,res) {
        var sql = 'SELECT * FROM categories limit ?,6';
        connection.query(sql,[req.query.currntPage*6], function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function getCategoriesCount (req,res) {
        var sql = 'select count(*) from categories';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    
    // 添加
    function addUser (req,res) {
        var sql = 'INSERT INTO user VALUES(0,?,?,0,0)'
        connection.query(sql, [req.query.name, req.query.password],function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function addAdmin (req,res) {
        var sql = 'INSERT INTO admin VALUES(0,?,?)'
        connection.query(sql, [req.query.name, req.query.password],function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function addCategories (req,res) {
        var sql = 'INSERT INTO Categories VALUES(0,?,?)'
        connection.query(sql, [req.query.name, req.query.memo],function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function addProducts (req,res) {
        var sql = 'INSERT INTO Products VALUES(0,?,?,?,?,?)'
        connection.query(sql, [req.query.categoryId, req.query.name, req.query.url, req.query.cost, req.query.memo],function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    // 修改
    function updataAdmin (req,res) {
        var sql = 'UPDATE admin SET mName = ?,mPassword = ? WHERE mId = ?'
        connection.query(sql, [req.query.name, req.query.password ,req.query.id],function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function updataCategories (req,res) {
        var sql = 'UPDATE categories SET name = ?,memo = ? WHERE CategoryId = ?'
        connection.query(sql, [req.query.name, req.query.memo ,req.query.id],function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function updataProducts (req,res) {
        var sql = 'UPDATE products SET categoryId = ?,pName = ?,pUrl=?,cost = ?,memo=? WHERE pId = ?'
        connection.query(sql, [req.query.categoryId, req.query.name ,req.query.url,req.query.cost,req.query.memo,req.query.id],function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }

    // 删除
    function deleteAdmin (req,res) {
        var sql = 'DELETE FROM admin where mId=?'
        connection.query(sql,[req.query.mId], function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function deleteProducts (req,res) {
        var sql = 'DELETE FROM products where pId=?'
        connection.query(sql,[req.query.Id], function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
    function deleteCategories (req,res) {
        var sql = 'DELETE FROM categories where categoryId=?'
        connection.query(sql,[req.query.Id], function (err, result) {
            if (err) {
                console.log( err.message);
                return;
            }
            res.send(result);
        });
    }
module.exports={
    getUser,
    getAdmin,
    getProducts,
    getAdminAll,
    getCategories,
    getAdminCount,
    getCategoriesCount,
    getProductsCount,
    addUser,
    addAdmin,
    addCategories,
    addProducts,
    updataAdmin,
    updataCategories,
    updataProducts,
    deleteAdmin,
    deleteProducts,
    deleteCategories,
}